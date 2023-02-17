import type webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: 'file-loader'
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const babelLoader = {
    test: /\.([tj]sx?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json'
            }
          ]
        ]
      }
    }
  };

  // Если не используем тайпскрипт - нужен babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    babelLoader,
    svgLoader,
    typeScriptLoader,
    cssLoader
  ];
}

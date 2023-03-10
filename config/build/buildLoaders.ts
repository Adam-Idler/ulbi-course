import type webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
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

  const babelLoader = buildBabelLoader();

  const cssLoader = buildCssLoader(isDev);

  // Если не используем тайпскрипт - нужен babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [
    fileLoader,
    babelLoader,
    svgLoader,
    typeScriptLoader,
    cssLoader
  ];
}

import path from 'path';
import { DefinePlugin, type RuleSetRule } from 'webpack';
import { type WebpackConfiguration } from 'webpack-dev-server';
import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  // @ts-expect-error Нет смысла обрабатывать лоадер
  config.resolve.modules = [paths.src, 'node_modules'];
  config.resolve?.extensions?.push('.ts', '.tsx');

  // @ts-expect-error Нет смысла обрабатывать лоадер
  config.module?.rules = config.module?.rules?.map((rule: RuleSetRule<string>) => {
    if (/svg/.test(rule.test)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });
  config.module?.rules?.push(buildCssLoader(true));

  config.plugins?.push(new DefinePlugin({
    IS_DEV: JSON.stringify(true),
    API: JSON.stringify('')
  }));

  return config;
};

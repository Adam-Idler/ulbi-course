import path from 'path';
import { type RuleSetRule } from 'webpack';
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
  config.resolve?.modules?.push(paths.src);
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

  return config;
};

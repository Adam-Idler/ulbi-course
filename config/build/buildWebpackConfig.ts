import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildLoaders } from '../build/buildLoaders';
import { buildPlugins } from '../build/buildPlugins';
import { buildResolvers } from '../build/buildResolvers';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers()
  };
}
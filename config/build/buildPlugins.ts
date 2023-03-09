import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({ isDev, paths, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API: JSON.stringify(apiUrl),
      PROJECT: JSON.stringify(project)
    })
  ];

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}

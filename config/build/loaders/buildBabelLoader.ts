export function buildBabelLoader () {
  return {
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
              keyAsDefaultValue: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json'
            }
          ]
        ]
      }
    }
  };
};

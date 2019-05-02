const path = require('path');

module.exports = {
  entry: './source/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'passxyz.ui.react.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'latest'],
              plugins: ['transform-class-properties']
            }
          }
        ],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  }
};

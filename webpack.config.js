const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {

  devServer: {
    contentBase: path.join(__dirname, '.'),
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3333
  },

  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },


  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]


};
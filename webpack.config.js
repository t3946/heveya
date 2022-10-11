const autoprefixer = require('autoprefixer')
const path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    // app: ['./src/stylesheets/base.scss']
    app: ['./src/index.js']
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: {
      index: path.join(__dirname, 'index.html')
    },
    compress: true,
    port: 3000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    Browserslist:['ie >= 8', 'last 4 version']
                  })
                ],
                sourceMap: true
              }
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },

  resolve: {
    extensions: ['.js', '.sass'],
    modules: [path.join(__dirname, './src'), 'node_modules'],
    alias: {
      "@styles": path.resolve(__dirname, 'src/stylesheets'),
    },
  }
}

module.exports = config

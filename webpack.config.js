const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
  return {
    context: resolve('src'),
    entry: {
      app: './main.tsx'
    },
    output: {
      filename: '[name].[hash].js',
      path: resolve('dist'),
      // Include comments with information about the modules.
      pathinfo: ifNotProd(), 
    },

    resolve: {
        extensions: [
            '',
            '.js',
            '.ts',
            '.tsx'
        ] 
    },

    devtool: ifProd('source-map', 'cheap-module-source-map'),

    module: {
      loaders: [
        {test: /\.tsx?$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/},
        {test: /\.css$/, loaders: ['style', 'css']},
      ],
    },
    // This is required, when using Hot Code Replacement between multiple calls to the compiler.
    recordsPath: resolve(__dirname, './webpack-records.json'),

    plugins: removeEmpty([

      new HtmlWebpackPlugin({
        template: resolve('src','index.html')
      }),

      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      })),

      ifProd(new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name: 'inline',
      })),

    ]),
  }
}
const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

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
    recordsPath: resolve(__dirname, './tmp/webpack-records.json'),

    plugins: removeEmpty([

      // Add nice progress bar
      new ProgressBarPlugin(),

      new HtmlWebpackPlugin({
        template: resolve('src','index.html')
      }),

      // Set NODE_ENV to enable production react version
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      }),

      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      })),

      ifProd(new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name: 'inline',
      })),

      // Deduplicate node modules dependencies
      ifProd(new webpack.optimize.DedupePlugin()),

      // Default webpack build options
      ifProd(new webpack.LoaderOptionsPlugin({
        debug: false
      })),

      // Uglify bundles
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false
        }
      }))

    ]),
  }
}

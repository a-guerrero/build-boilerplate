// Docs:
// Implicit vendor chunk: http://bit.ly/2lEZgnJ
// Caching: http://bit.ly/2mHs7rk

let webpack = require('webpack');
let AssetsPlugin = require('assets-webpack-plugin')
let path = require('path');
let isProduction = process.env.NODE_ENV === 'production';

let config = {
    entry: {
        main: './app/scripts/main.js',
        vendor: [
            'pixi.js',
            'signals'
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/scripts')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new AssetsPlugin({
            path: path.resolve(__dirname, 'app/views/data')
        })
    ]
};

if (isProduction) {
    // Optimization
    let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();
    config.plugins.push(uglifyJsPlugin);
} else {
    // Source maps support
    config.devtool = 'source-map';
}

module.exports = config;

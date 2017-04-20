// There are some issues with webpack and `process.env.NODE_ENV`, the
// recommended approach is to set it manually with cross-env:
// `cross-env NODE_ENV=production webpack -p`
// Building for production: http://bit.ly/2p0hKzn
// Issue #2537: http://bit.ly/2oPpOmb
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dest'),
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [
                            'transform-runtime',
                            require('babel-plugin-transform-object-rest-spread')
                        ],
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.pug',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dest')
    }
};

if (IS_PRODUCTION) {
    // It is recommended to have source maps in production for debugging and
    // benchmark testing: http://bit.ly/2pWJ6Uw
    config.devtool = 'source-maps';
}

module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dest'),
    },
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

module.exports = config;

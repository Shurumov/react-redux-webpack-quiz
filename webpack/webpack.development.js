const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { envDev, paths } = require('../bin');
const { NODE_ENV, HOST, PORT, API_DOMAIN, API_VERSION } = envDev;

console.info(`Project environment = "${NODE_ENV}"`);

const API_URL = `${API_DOMAIN}/api/${API_VERSION}`;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: 'src',
        historyApiFallback: true,
        hot: true,
        host: HOST,
        port: PORT,
        // proxy: {
        //   '/api/**': {
        //     target: API_DOMAIN,
        //     secure: false,
        //     changeOrigin: true
        //   },
        // },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                API_URL: JSON.stringify(API_URL),
                API_DOMAIN: JSON.stringify(API_DOMAIN),
                API_VERSION: JSON.stringify(API_VERSION),
            },
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // you can use variables in all sass|scss files without importing
                            resources: ['./src/styles/variables.scss'],
                        },
                    },
                ]
            },
        ],
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
    }
});


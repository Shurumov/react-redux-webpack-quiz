const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// css plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//
const { envProd, paths } = require('../bin');
const { NODE_ENV, API_DOMAIN, API_VERSION, UPLOAD_FILES_URL, UPLOAD_IMAGES_URL } = envProd;

console.info(`Project environment = "${NODE_ENV}"`);

const API_URL = `${API_DOMAIN}/${API_VERSION}`;

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name]-[chunkhash:8].js',
        path: paths.appBuild
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            filename: 'index.html',
            minify: {
                removeComments: true,
                useShortDoctype: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
                API_URL: JSON.stringify(API_URL),
                API_DOMAIN: JSON.stringify(API_DOMAIN),
                API_VERSION: JSON.stringify(API_VERSION),
                UPLOAD_FILES_URL: JSON.stringify(UPLOAD_FILES_URL),
                UPLOAD_IMAGES_URL: JSON.stringify(UPLOAD_IMAGES_URL),
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^.\/locale$/,
            contextRegExp: /moment$/,
        }),
        new CopyWebpackPlugin([
            { from: paths.appAssets, to: paths.appBuildAssets },
        ]),
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                sourceMap: true,
                parallel: true,
                terserOptions: {
                    warnings: false,
                    ie8: false
                }
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
            }
        ],
    },
});

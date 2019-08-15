const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { paths } = require('../bin');

module.exports = {
    entry: {
        vendor: paths.appVendorsJs,
        app: paths.appIndexJs
    },
    target: 'web',
    plugins: [
        new LoadablePlugin(),
        new ProgressBarPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: paths.appSrc,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    }
};

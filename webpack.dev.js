
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const cssLoader = { loader: "css-loader", options: { sourceMap: true } };
const postCssLoader = { loader: "postcss-loader", options: { sourceMap: true } };
const sassCssLoader = { loader: "sass-loader", options: { sourceMap: true } };


module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    cssLoader,
                    postCssLoader,
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    cssLoader,
                    postCssLoader,
                    sassCssLoader
                ],
            },
        ]
    },
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = 'style-loader';

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'html/index.html',
            inject: true,
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/product-detail.html',
            inject: true,
            filename: 'product-detail.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        watchFiles: ["html/", "src/"],
        static: path.resolve(__dirname, 'public'),
        port: 3000,
        open: true,
        hot: true,
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
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
        new HtmlWebpackPlugin({
            template: 'html/blog.html',
            inject: true,
            filename: 'blog.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/blog1.html',
            inject: true,
            filename: 'blog1.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/blog2.html',
            inject: true,
            filename: 'blog2.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/terms-and-conditions.html',
            inject: true,
            filename: 'terms-and-conditions.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/contact-us.html',
            inject: true,
            filename: 'contact-us.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/about-us.html',
            inject: true,
            filename: 'about-us.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/branches-and-representatives.html',
            inject: true,
            filename: 'branches-and-representatives.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/service-time.html',
            inject: true,
            filename: 'service-time.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/device-registry.html',
            inject: true,
            filename: 'device-registry.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/branches-and-representatives-1.html',
            inject: true,
            filename: 'branches-and-representatives-1.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/follow-up-repairs.html',
            inject: true,
            filename: 'follow-up-repairs.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/follow-up-repairs-1.html',
            inject: true,
            filename: 'follow-up-repairs-1.html'
        }),
        new HtmlWebpackPlugin({
            template: 'html/device-warranty.html',
            inject: true,
            filename: 'device-warranty.html'
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
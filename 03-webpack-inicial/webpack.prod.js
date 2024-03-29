const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Tesrser = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    output: {
        clean: true,
        filename: '[name].[fullhash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Tesrser(),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Mi webpack app',
                // filename: 'index.html',
                template: './src/index.html',

            }
        ),
        new MiniCssExtractPlugin({
            // filename: '[name].[fullhash].css',
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
            ],
        }),
    ],
};

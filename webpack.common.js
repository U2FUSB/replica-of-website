const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
        }),
        new HtmlWebpackPlugin({
            filename: "home.html",
            template: "./src/pages/home.html",
        }),
        new HtmlWebpackPlugin({
            filename: "weg.html",
            template: "./src/pages/weg.html",
        }),
        new HtmlWebpackPlugin({
            filename: "mietverwaltung.html",
            template: "./src/pages/mietverwaltung.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};

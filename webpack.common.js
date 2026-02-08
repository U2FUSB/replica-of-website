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
        watchFiles: ["./src/pages/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/template.html",
        }),
        new HtmlWebpackPlugin({
            filename: "template.html",
            template: "./src/pages/template.html",
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
        new HtmlWebpackPlugin({
            filename: "nachfolge.html",
            template: "./src/pages/nachfolge.html",
        }),
        new HtmlWebpackPlugin({
            filename: "partnerschaft.html",
            template: "./src/pages/partnerschaft.html",
        }),
        new HtmlWebpackPlugin({
            filename: "karriere.html",
            template: "./src/pages/karriere.html",
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

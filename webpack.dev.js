const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
        historyApiFallback: {
            rewrites: [
                { from: /^\/manifest/, to: "/template.html" },
                { from: /^\/mission/, to: "/template.html" },
                { from: /^\/home/, to: "/home.html" },
                { from: /^\/weg/, to: "/weg.html" },
                { from: /^\/mietverwaltung/, to: "/mietverwaltung.html" },
                { from: /^\/nachfolge/, to: "/nachfolge.html" },
                { from: /^\/partnerschaft/, to: "/partnerschaft.html" },
                { from: /^\/karriere/, to: "/karriere.html" },
            ],
        },
    },
});

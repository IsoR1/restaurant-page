const path = require("path");

module.exports = {
    mode: 'development',
    // entry: ["./src/index.js"],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
};
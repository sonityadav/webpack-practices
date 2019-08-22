const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js', // default main.js
        path: path.resolve(__dirname, 'dist')
    },

    // Webpack only understands JavaScript and JSON files. LOADERS allow webpack to process other types of files and convert them into valid modules.
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }, // "Hey webpack, when you see a '.txt' file in require()/import statement, use raw-loader to transform it."
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
}

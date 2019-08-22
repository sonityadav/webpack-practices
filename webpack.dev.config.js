const path = require('path'); // native node.js api
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to be installed via npm
const WebpackCompilationCompletedPlugin = require('./MyWebpackPlugin');

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

    // PLUGINS serve the purpose of doing anything else that a loader cannot do.
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}), // this plugin generates an HTML file by adding your generated bundles in the given template and puts it in dist/
        new WebpackCompilationCompletedPlugin() // it logs when webpack compilation completes
    ]
}

const path = require('path');
const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...base,
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({
        title: 'FI Goal Bot',
        filename: path.resolve(__dirname, 'index.html'),
        hash: true,
        template: './src/index.html'
    })]
};

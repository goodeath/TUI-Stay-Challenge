const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: 'development',
    target: 'node',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: 'ts-loader',
            },

            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.tsx', '.ts', '.js'],
        alias: {
            'pg-native': path.join(__dirname, '/src/ignore.js'),
            mariadb: path.join(__dirname, '/src/ignore.js'),
            sqlite3: path.join(__dirname, '/src/ignore.js'),
            tedious: path.join(__dirname, '/src/ignore.js'),
            locale: path.join(__dirname, '/src/ignore.js'),
            sqlite: path.join(__dirname, '/src/ignore.js'),
            mysql: path.join(__dirname, '/src/ignore.js'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    externals: {
        knex: 'commonjs knex',
    },
};

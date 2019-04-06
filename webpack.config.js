const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        '@babel/polyfill',
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'build/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
}
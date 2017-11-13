var webpack = require('webpack')
module.exports = {
    entry: {
        main: "./src/main"
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        open: true,
        port: 9000,
        inline: true,
        compress: true,
        hot: true
    },
    devtool: 'cheap-source-map',
    resolve: {
        alias: {
            "vue": "vue/dist/vue"
        },
        extensions: ['.js', '.vue'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

}


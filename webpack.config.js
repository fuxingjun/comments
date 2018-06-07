var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/app.js'),
    output: {
        path: path.join(__dirname, 'dist/assets'),
        filename: "bundle.js",
        publicPath: "assets/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        host: 'localhost',
        port: 8081
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                //exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192']
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                use: ['file-loader']
            },
            {
                test:/\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use:['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use:['url-loader?limit=10000&mimetype=application/otcet-stream']
            },
            {
                test:/\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use:['file-loader']
            },
            {
                test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use:['url-loader?limit=10000&mimetype=image/svg-xml']
            },
            {
                test: require.resolve('jquery'),//得到jquery模块的绝对路径
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'// 将jquery绑定为window.jQuery
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }//在全局上下文执行一次js脚本
        ]
    },
    resolve:{
        modules:[
            'node_modules',
            path.resolve(__dirname,'src/common'),
            path.resolve(__dirname,'src/components')
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ],
};
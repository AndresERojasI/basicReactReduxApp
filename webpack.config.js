const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Global paths for app and build dir
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');

// Define if the build is for production or for dev
const DEBUG = process.env.NODE_ENV !== 'production';

// Config object to be passed to the Webpack Module
var config = {
    // single entry point, in can also be an array of strings
    entry: APP_DIR + '/client.js',

    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },

    devtool: DEBUG? 'inline-source-map': false,

    // Output object, defines the output configuration
    output: {
        path: BUILD_DIR, // Output path
        filename: 'assets/bundle.js', // File Name
        //publicPath: '/' // Sever public path
    },

    module: {
        // Interpreters for each kind of file present inn the App
        loaders: [
            { 
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, 
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            { 
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ 
                    fallbackLoader: 'style-loader',
                    loader: "css-loader"
                })
            },
            { test: /\.png$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/png' },
            { test: /\.jpg$/, loader: 'url?prefix=images/&limit=8000&mimetype=image/jpeg' },
            { test: /\.woff$/, loader: 'url?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'file?prefix=fonts/' }, 
            { test: /\.eot$/, loader: 'file?prefix=fonts/' },
            { test: /\.json$/, loader: 'json' }
        ]
    },

    devServer: {
        contentBase: "./app",
        colors: true,
        historyApiFallback: true,
        inline: true,
        //hot: true,
    },

    plugins : [
        new BellOnBundlerErrorPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("assets/styles.css"),
        new HtmlWebpackPlugin({
            template: APP_DIR + "/index.html"
        })
    ]
};

module.exports = config;
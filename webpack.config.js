const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')

// Global paths for app and build dir
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');

// Define if the build is for production or for dev
const DEBUG = process.env.NODE_ENV !== 'production';
const pkg = require('./package.json');

const useHMR = !!global.HMR; // Hot Module Replacement (HMR)

const babelConfig = Object.assign({}, pkg.babel, {
    babelrc: false,
    cacheDirectory: useHMR,
});

// Config object to be passed to the Webpack Module
var config = {
    // single entry point, in can also be an array of strings
    entry: [
        APP_DIR + '/client.js'
    ],

    /**externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },**/

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
                loader: `babel-loader?${JSON.stringify(babelConfig)}`,
                query: {
                    presets: ['react', 'es2015', 'stage-0', 'stage-1'],
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

    plugins : [
        new HtmlWebpackPlugin({
            template: APP_DIR + "/index.html"
        }),
        new ExtractTextPlugin("assets/styles.css")
    ]
};

// Optimize the bundle in release (production) mode
if (!DEBUG) {
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

// Hot Module Replacement (HMR) + React Hot Reload
if (DEBUG && useHMR) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = config;
const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = {
    entry: {
        main: [
            path.join(__dirname, '/dist/app.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "Movimientos.js"
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
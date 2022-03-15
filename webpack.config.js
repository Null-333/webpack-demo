const path = require('path')

module.exports = {
    entry: {
        'assets/js/home': './src/pages/home/main.js',
        'assets/js/about': './src/pages/about/main.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name]-[hash:6].[ext]',
                    },
                },
            }, 
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                },
            },
        ]    
    }
}
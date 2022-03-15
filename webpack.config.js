const path = require('path')

module.exports = {
    // entry: {
    //     'assets/js/home': './src/pages/home/main.js',
    //     'assets/js/about': './src/pages/about/main.js',
    // },
    mode: 'development',
    entry: './src/js/image.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        }
                    }
                ]
            },
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
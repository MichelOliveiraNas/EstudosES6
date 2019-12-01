module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //ARQUIVO ONDE SERÁ ESCRITO O CÓDIGO JS.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [ //COMO O WEBPACK VAI SE COMPORTAR QUANDO FOREM CRIADOS NOVOS ARQUIVOS .JS
            {
                test: /\.js$/, //EXPRESSÃO REGULAR. IRÁ BUSCAR TODOS ARQUIVOS COM FINAL .JS]
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
};
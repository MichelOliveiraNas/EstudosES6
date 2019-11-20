module.exports = {
    entry: '/main.js', // ARQUIVO QUE SERÁ ESCRITO O CÓDIGO.
    output: {
        path: __dirname, // VARIAVEL GLOBAL QUE SE REFERE AO ARQUIVO WEBPACK.CONFIG.JS.
        filename: 'bundle.js'
    },
    module: {
        rules: [ //COMO O WEBPACK DEVE SER COMPORTAR QUANDO O USUÁRIO TENTAR IMPORTAR ARQUIVOS JS.
            {
                test: /\.js$/, //EXPRESSÃO REGULAR. BUSCARÁ TODOS ARQUIVOS COM FINAL .JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
        //O CÓDIGO ACIMA FARÁ COM Q TODOS ARQUIVOS .JS CRIADOS, RODEM O BABEL.
    }
};
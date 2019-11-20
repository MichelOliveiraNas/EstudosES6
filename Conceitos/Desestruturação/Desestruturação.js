/*---------DESESTRUTURAÇÃO---------*/

const usuario = {
    nome: 'Michel',
    idade: '19',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

const { nome, idade, endereco: { cidade } } = usuario; //BUSCANDO DADOS DO OBJETO UTILIZANDO DESESTRUTURAÇÃO.

console.log(nome);
console.log(idade);
console.log(cidade);
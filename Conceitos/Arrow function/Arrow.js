/*---------ARROW FUNCTION --------*/

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({nome: 'Michel'});

console.log(teste())

    /*COM ARROW FUNCTION, CONSEGUIMOS:
    - REMOVER OS PARÊNTESES DOS PARÂMETROS, QUANDO POSSUI APENAS UM PARÂMETRO.
    - REMOVER O RETURN E AS CHAVES */
/*---------SPREAD - REPASSA AS INFORMAÇÕES DE UM OBJETO OU ARRAY PRA OUTRA ESTRUTURA DE DADOS------*/

const usuario = {
    nome: 'Michel',
    idade: 23,
    empresa: 'Stefanini'
}
const usuario2 = { ...usuario, nome: 'Gabriel' }


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3)
console.log(usuario2)


/*---------REST - PEGA O RESTO DAS PROPRIEDADES---------*/


function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 4, 5, 6, 7))

const usuario = {
    nome: 'Michel',
    idade: 19,
    empresa: 'Stefanini'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
// 5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
console.log(usuario2)

const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };
console.log(usuario3)


// 5.2

function soma(...params) {
    return params.reduce((total, next) => {
        return total + next;
    })
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// 5.1 Rest
const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x)
console.log(y)
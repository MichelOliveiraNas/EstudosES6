
const usuario = {
    nome: 'Michel'
}; // É POSSÍVEL MUDAR UM OBJETO CONST CASO SEJA ALTERADO OS VALORES DENTRO DELE. SE CHAMA "MUTAÇÃO".

usuario.nome = 'cleiton';

//----------------------------------------------------------------////----------------------------------------------------------------//

function teste(x) {
    let y = 2; // VARIAVEL DE ESCOPO, OU SEJA, VISIVEL APENAS NESTA FUNCTION.

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10)
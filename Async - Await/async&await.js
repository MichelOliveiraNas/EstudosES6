const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
})

async function executaPromise() {
    const response = await minhaPromisse(); // FUNÇÃO QUE VAI RETORNAR UMA PROMISE.

    console.log(response)
}

executaPromise();

// UTILIZANDO A MESMA ASYNC FUNCTION COM ARROW

const executaPromise2 = async () => {
    console.log(await minhaPromisse()); // AWAIT É UTILIZADO SOMENTE COM FUNÇÕES ASYNC. ELE POSSUI O MESMO PAPEL DO "THEN".
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());

    /*QUANDO SE TEM MAIS DE UMA CHAMADA DE AWAIT QUE RETORNA UMA PROMISE, A PRÓXIMA
    LINHA SÓ SERÁ EXECUTADA QUANDO A PRIMEIRA TERMINAR DE EXECUTAR; OU SEJA,
    A LINHA 17 VAI EXECUTAR SOMENTE QUANDO A 16 TERMINAR SUA EXECUÇÃO E ASSIM POR DIANTE.*/
}

executaPromise2();
import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        // O BLOCO TRY/CATCH PODE SER UTILIZADO PARA TRATAR ERROS NO ASYNC/AWAIT, SEMELHANTE AO THEN E CATCH TRADICIONAIS.
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            // É POSSÍVEL UTILIZAR ASYNC/AWAIT COM AXIOS, POIS O AXIOS SEMPRE RETORNA UMA PROMISE.

            console.log(response);
        }
        catch (err) {
            console.warn('erro: ' + err)
        }
    }
}

Api.getUserInfo('MichelOliveiraNas')
import { soma } from './export' //IMPORTAÇÃO DE UMA FUNCTION DE OUTRO ARQUIVO.
import subFunction from './export' //IMPORTAÇÃO DE UMA FUNCTION DEFAULT. COMO É DEFAULT, NÃO SE UTILIZA AS CHAVES E PODE SER IMPORTADO COM QUALQUER NOME.

console.log(soma(1, 2));
console.log(subFunction(4, 2))
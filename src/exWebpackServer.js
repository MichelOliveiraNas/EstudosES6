"use strict";

//1.1 - Em seu arquivo principal, import apenas a classe Usuario renomeando-a para ClasseUsuario
//e chame a função info():

import ClasseUsuario from '../Webpack Server Desafio/functions';
ClasseUsuario.info()

//1.2 - Em seu arquivo principal, importe a variável de idade e exiba a mesma em tela:

import {idade} from '../Webpack Server Desafio/functions'
console.log(idade)

//1.3 - Em seu arquivo principal, importe tanto a classe quanto a variável idade e renomeie a variável idade
//para IdadeUsuario:

import {Usuario, idade as IdadeUsuario} from '../Webpack Server Desafio/functions'
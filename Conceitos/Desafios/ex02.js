//* -------------2.1-------------- */

 const usuarios = [
     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];


const idades = usuarios.map(function (idade, index) {
     return usuarios[index].idade;
 })

 console.log(idades);

//* --------------2.2 --------------*/

 const rocketSeat = usuarios.filter(function(empresa, index) {
     return usuarios[index].empresa === 'Rocketseat' &&
     usuarios[index].idade > 18;
 });

 console.log(rocketSeat);

 /* ---------------2.3------------ */

 const google = usuarios.find((usuario, index) => usuarios[index].empresa === 'Google')
 console.log(google);

 /*----------------2.4------------ */

 for(let key in usuarios) {
     return usuarios[key].idade * 2;
 }

 console.log(idadeX2)
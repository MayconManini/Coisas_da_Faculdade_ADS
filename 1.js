let rlSync = require('readline-sync')
let nome = rlSync.question('Qual seu nome? ');
let sobrenome = rlSync.question('Qual seu sobrenome: ');
let nomeCompleto = nome+" "+sobrenome;
console.log('Seu nome completo é: ' + nomeCompleto);
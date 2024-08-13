//Maneiras de criar um Array (lista)
var arr_1 = new Array('elemento1', 'elemento2', '...', 42);
console.log(arr_1);
var arr_2 = Array(3, 3, 6, 9);
console.log(arr_2);
var arr_3 = [1, 2, 3,3];
console.log(arr_3);

//Definindo tamanho do Array
var arr_4 = Array(3);
console.log(arr_4);
//ou
var arr_5 =[];
arr_5.length = 4;
console.log(arr_5);

//Utilizando as posições nos arrays
var teste = ['a','b',3];
console.log(teste[0]); // A primeira posição é a 0
console.log(teste[2]); // A segunda posição é a 1, e assim por diante

console.log(teste.indexOf('b'));
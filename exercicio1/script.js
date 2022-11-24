// # Exercício 1

// No primeiro exercício vamos praticar a criação de arrays. Crie 3 arrays diferentes:

// - O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
// - O segundo array deve possuir apenas **strings**;
// - O terceiro array deve possuir **números**, **strings** e **booleanos**.
// Imprima cada um dos arrays acima, utilizando `console.log()`

const arrayNum = [8,6,4,5,9,7,2,6,5,3,1]
const arrayStrings = ['a','b','c','d','e']
const arraySort = [true, 56, false, 32, 'sort', 'array']

console.log(`Array de números`)
arrayNum.forEach(function(valor, index){
    console.log(`índice: ${index} | conteúdo: ${valor}`)
})

console.log(`Array de Strings`)
arrayStrings.forEach(function(valor, index){
    console.log(`índice: ${index} | conteúdo: ${valor}`)
})

console.log(`Array variado`)
arraySort.forEach(function(valor, index){
    console.log(`índice: ${index} | conteúdo: ${valor}`)
})
// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do 
//     terceiro array;
// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado 
//     destas verificações no console.log().
//  A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 

const arrayNum = [8,6,4,5,9,7,2,6,5,3,1]
const arrayStrings = ['a','b','c','d','e']
const arraySort = [true, 56, false, 32, 'sort', 'array']

console.log(arrayNum.length)
console.log(arrayStrings.length)
console.log(arraySort.length)

console.log(arrayNum[0])
console.log(arrayStrings[1])
console.log(arraySort[2])

console.log(arrayNum.includes(5))
console.log(arraySort.includes(5))
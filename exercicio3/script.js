// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const arrayNum = [8,6,4,5,9,7,2,6,5,3,1]
const arrayStrings = ['a','b','c','d','e']
const arraySort = [true, 56, false, 32, 'sort', 'array']

const arrayNumCopia = arrayNum.slice()
const arrayStringsCopia = arrayStrings.slice()
const arraySortCopia = arraySort.slice()

arrayNumCopia.unshift('number')

console.table(arrayNum)
console.table(arrayNumCopia)

arrayStringsCopia.pop()

console.table(arrayStrings)
console.table(arrayStringsCopia)

arraySortCopia.splice(1,1,)

console.table(arraySort)
console.table(arraySortCopia)
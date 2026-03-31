let frutas = ['maçã', 'banana', 'tomate']

frutas.push('mamão', 'melão')

frutas.pop()

frutas.unshift('jaca')

frutas.shift()

frutas.splice(0, 1)
console.log(frutas)
console.log(frutas.length)

const temUva = frutas.includes('uva')
console.log(temUva)

console.log(frutas.indexOf('uva', 'romã'))

const ordemAlfabetica = frutas.sort()
console.log(ordemAlfabetica)

const paraString= frutas.join(', ')
frutas.push('romã')
console.log(frutas)
const prompt = require('prompt-sync')()

const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite outro número: '))

function multiplic (n1, n2){
    return n1 * n2 
}

console.log(multiplic(n1, n2))
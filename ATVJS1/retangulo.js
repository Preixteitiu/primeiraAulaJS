const require = prompt('prompt-sync')()

const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite outro número: '))

function area (n1, n2){
    return n1 * n2
}

console.log(area(n1, n2))
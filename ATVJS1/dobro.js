const prompt =  require('prompt-sync')()

const n1 = Number(prompt('Digite um número: '))

function dobrar(n1){
    return n1 * 2
}

console.log(`O dobro é: `,dobrar(n1))
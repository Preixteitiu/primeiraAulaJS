const prompt = require ('prompt-sync')()


const segredo = 9
let chute = 0

while (chute !== segredo){
    chute = Number(prompt('escolha um número de 1 a 10: '))
if (chute === segredo){
    return console.log('acertou')
} if (chute >=11){
    return console.log('insira um número válido')
} 
};

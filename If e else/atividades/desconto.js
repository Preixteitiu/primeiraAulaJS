//funçäo de desconto + condiçäo (aritmético + funçäo + if) 
// crie precoComDesconto(preco, perc) que retorne preco - (preco*perc/100)
// se perc > 0  aplique e mostre o final, senäo mostre o preço original//

function aplicarCupom (preco, cupom) {
    return preco - preco * cupom/100
}

const preco = 150
const cupom = 10 

const precoFinal  = aplicarCupom(preco, cupom)

if(precoFinal > 0 ){
    if (cupom === 0)
        console.log(`o valor da conta sem desconto é: ${precoFinal}`)
    } else{
        console.log 
    }
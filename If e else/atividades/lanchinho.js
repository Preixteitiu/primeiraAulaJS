function dinheiro (saldo, custo){
    return saldo - custo 
}
let saldo = 20
let custo = 44.4

if (saldo>custo){
    console.log (`aprovado`)
} else{
    console.log(`negado, ainda faltam ${saldo-custo} para finalizar a compra`)
}
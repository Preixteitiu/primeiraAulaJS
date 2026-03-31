function valorTotalTaxa (preco, taxa){
    return preco + (preco*taxa/100)
}
function taxaPorPessoa (final, pessoas){
    return final / pessoas
}
let preco = 50
let taxa = 23
let pessoas = 10
let final = valorTotalTaxa(preco, taxa)
let impost = taxaPorPessoa (final, pessoas)

if (pessoas > 0 && taxa >=0){
    console.log (`a taxa é ${taxa}% por pessoa fica ${impost.toFixed(2)} e o valor total fica ${final}`)
} else{
    console.log (`dados inválidos`)
}

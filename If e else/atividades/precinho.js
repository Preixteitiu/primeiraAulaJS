function cupom (desconto){
    return preco-(preco*desconto/100)
}
let preco = 179.9
if ((cupom(15))-preco>preco){
    console.log(`o preço final é ${preco-15}`)
} else{
    console.log (`desconto inválido`)
}
// função de troco + verificação (aritmético + função + if + comparador)
// crie "calcularTroco" (pago. compra) que retorne "pago - compra".
// se o troco for >=0, mostre "compra OK" e o troco, senão "falta" e quanto falta//
function DepoisDaCompra (saldoAtual, valorCompra){
    return saldoAtual - valorCompra
}
const saldoAtual = 5000
const valorCompra = 5000

if(valorCompra <=0){
    console.log ('Item indisponível')
} else{
    const saldoFinal = DepoisDaCompra(saldoAtual, valorCompra)
    if(saldoFinal > 0 ){
        console.log('Pode comprar')
    } else{
        console.log(`Falta din din ${valorCompra - saldoAtual}`)
    }
}
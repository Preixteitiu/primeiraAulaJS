class Conta{
    constructor(titular, saldo, saque, deposito){
        this.titular = titular
        this.saldo = saldo
        this.saque = saque
        this.deposito = deposito
    }
oDeposito(saldo, deposito) {
    return saldo + deposito
}
oSaque(saldo, saque) {
    return saldo - saque
}

oSaldo(saldo){
    return console.log(saldo, `seu saldo é de ${this.saldo}`)
}
}

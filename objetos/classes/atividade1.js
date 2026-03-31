class Pessoa {
    constructor(nome, idade){
        this.nome = nome    
        this.idade = idade
    } metodo() {
        console.log (`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade `)
    }
}

let pessoa1 = new Pessoa ('isaque', 26)
console.log(pessoa1)
const prompt = require('prompt-sync')()

class Pessoa {
constructor(nome, idade){
    this.nome = nome
    this.idade = idade
} apresentar(){
    console.log(`Olá sou o cliente ${this.nome} e tenho ${this.idade} anos de idade`)
}
}

class Funcionario extends Pessoa{
    constructor(nome, idade, salario){
        super(nome, idade, salario)
        this.salario = salario
    }
    apresentar(){
    console.log(`Olá sou o funcionário ${this.nome} tenho ${this.idade} e recebo ${this.salario}`)
    }
    
}

const oNOme = prompt ('qual seu nome?  ')
const aIdade = Number (prompt ('qual sua idade?  '))
const oSalario = Number (prompt ('quanto eu ganho?  '))
 

const pessoa1 = new Pessoa (oNOme, aIdade, oSalario)
const funcionario1 = new Funcionario(oNOme, aIdade, oSalario)

funcionario1.apresentar()
pessoa1.apresentar()

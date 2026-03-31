const prompt = require('prompt-sync')()

class Pessoa {
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`)
    }
}


class Aluno extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade)

        this.curso = curso
    }
    apresentar(){
        console.log(`meu nome é ${this.nome}, tenho ${this.idade} e estou cursando ${this.curso}`)
    }
}


class Professor extends Pessoa{
    constructor(nome, idade, disciplina){
        super(nome, idade)

        this.disciplina = disciplina
    }
    apresentar(){
        console.log(`sou o professor de ${this.disciplina}, tenho ${this.idade} anos
        e me chamo ${this.nome}`)
    }
}

const profNome = prompt('Digite o nome do professor: ')
const profIdade = prompt('Digite a idade do professor": ')
const profDisciplina = prompt('Digite a disciplina do professor: ')

const professor1 = new Professor(profNome, profIdade, profDisciplina)
professor1.apresentar()
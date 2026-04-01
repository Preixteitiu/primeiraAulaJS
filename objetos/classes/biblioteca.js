class Livro{
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }

    
}


class Biblioteca{
    constructor(){
        this.livros = []
    }

    adicionarLivros(livro){
        this.livros.push(livro)
        console.log(`O item ${livro.nome}`)
    }

    listarLivros(){
        let disponivel = this.disponivel
        if (this.livros.length > 0)
        return this.livros.forEach((titulo, disponivel)=> {
        `O ítem ${titulo.nome} está ${disponivel} `
    })
    }

    seDisponivel(titulo){
        if(this.titulo = this.disponivel)
            console.log(`O título ${titulo.nome} está disponível`)
        else{
            console.log(`O título ${titulo.nome} não está disponível`)
        }
    }
}
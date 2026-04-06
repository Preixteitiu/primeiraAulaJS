class Livro {
  constructor(titulo, autor) {
    this.nome = titulo;
    this.autor = autor;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
    this.disponivel = true;
  }

  adicionarLivros(titulo) {
    if (!titulo.nome || !titulo.autor) {
      console.log(`Escreva o autor e o titulo do livro`);
    } else {
      this.livros.push(titulo);
      console.log(`O item ${titulo.nome} foi adicionado`);
    }
  }

  seDisponivel(titulo) {
    if (this.disponivel) {
      console.log(`O ${titulo.nome} está disponível`);
    } else {
      console.log(`O livro ${titulo.nome} não está disponível `);
    }
  }

  listarLivros() {
    if (this.livros.length < 0)
      console.log(`Não esitem livros na bilbioteca`)
      else {
      console.log(this.livros.length)
      return this.livros.length}
  }

  emprestarLivros(titulo) {
    let emprestado = (this.disponivel);
    if (!emprestado)
      console.log(`O ${titulo.nome} já está em uso`)
    else{
      console.log(`O ${titulo.nome} foi emprestado com sucesso`)
    }
    return !emprestado
  }

  devolverLivros(titulo) {
    let emprestado = !(this.disponivel)
      console.log(`O item ${titulo.nome} foi devolvido com sucesso`)
    return{
      emprestado
    }  
  }
}

const livro1 = new Livro(`Piratas do Caribe`, 'Autor' );
const livro2 = new Livro (`Dune`, `capeta` )

const prateleira = new Biblioteca(`SEBO`);

prateleira.adicionarLivros(livro1);
prateleira.adicionarLivros(livro2);
prateleira.seDisponivel(livro1);
prateleira.seDisponivel(livro2);

prateleira.listarLivros()
prateleira.emprestarLivros(livro2)
prateleira.seDisponivel(livro2);
prateleira.devolverLivros(livro2)

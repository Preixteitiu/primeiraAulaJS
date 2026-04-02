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
    this.livros.push(titulo);
    console.log(`O item ${titulo.nome} foi adicionado`);
  }

  listarLivros() {
    return this.livros.length
  }

  seDisponivel(titulo) {
    if (this.disponivel) {
      console.log(`O ${titulo.nome} está disponível`);
    } else {
      console.log(`O livro ${titulo.nome} não está disponível `);
    }
  }

  emprestarLivros(titulo){
    this.livros.pop()
    const emLeitura = !this.disponivel
    console.log(`O item ${titulo.nome} foi emprestado com sucesso`)
    return emLeitura
    }
}

const livro1 = new Livro(`Piratas do Caribe`, `Jack Sparrow`);

const prateleira = new Biblioteca(`SEBO`);

prateleira.adicionarLivros(livro1);
prateleira.seDisponivel(livro1);
prateleira.listarLivros()

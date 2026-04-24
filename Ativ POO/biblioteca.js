const require = prompt("prompt-sync")();

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.lista = [];
  }
}

class Biblioteca {
  constructor() {
    this.user = [];
    this.livros = [];
  }

  adicionarLivros(adicionado) {
    if ((adicionado.titulo = adicionado.disponivel)) {
      this.livtos.push(titulo);
      console.log(`O titulo ${titulo.titulo} foi adicionado com sucesso`);
    } else {
      console.log(`Este título não possui cadastro ativo`);
    }
  }

  emprestar(emprestado) {
    if ((emprestado.titulo = emprestado.disponivel)) {
      console.log(`O título ${emprestado.titulo} foi emprestado com sucesso`);

      return !emprestado.disponivel;
    }
  }

  devolver(devolvido) {
    if ((devolvido.titulo, !devolvido.disponivel)) {
      console.log(`O ${devolvido} foi devolvido com sucesso`);

      return devolvido.disponivel;
    }
  }
}

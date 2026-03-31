                        const prompt = require('prompt-sync')()
//criei uma classe de produtos com parâmetros de nome, preços e quantidades
class Produtos{
    constructor (nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    }

   infoProduto(){
        console.log(`-Nome: ${this.nome}
            -Valor: R$ ${this.preco}
            -Quantidade: ${this.quantidade}`)
    }

    reporProduto(quantidade){
        if (quantidade > 0 ){
        this.quantidade += quantidade
        console.log(`Produtos adicionado ${this.quantidade}`)
        }
    }
}

    //classe array vazio, usei para somente armazenar produtos
class Carrinho{
    constructor(){
    this.itens = []}
    
    adicionarItem(produto){
        this.itens.push(produto)
        console.log(`O item ${produto.nome} foi adicionado no carrinho`)   
    }

    removerItem(){
        if (this.itens.length > 0){
        const removido = this.itens.pop()
        console.log(`${removido.nome} foi removido com sucesso `)
        }
        else console.log(`Não há itens para serem removidos`)
    }

    contarItem(){
       return this.itens.length
    }

    listarItens(){
        if (this.itens.length > 0)
        this.itens.forEach((index, produto)=> {
    console.log(`${index + 1}- ${produto.nome} - R$ ${produto.preco}`)})
    }

    calcularTotal(){
        let total = 0
        this.itens.forEach(item =>{
        total += item.preco
        })
        return total 
    }
}

    //a classe mercado serve como um estoque no geral
class Mercado{
    constructor(nome){
        this.nome = nome
        this.produtos = []
    }

    addProduto(produtos){
        this.produtos.push(produtos)
        console.log(`${produtos.nome} foi adicionado ao estoque`)
    }

   

    removerProduto(produtos){
         produtos.quantidade.pop()
        console.log(`${produtos.nome} foi removido`)
    }

    mostrarEstoque(){
        this.produtos.forEach (produtos =>{
      if (produtos.quantidade > 0)
      console.log(`${produtos.nome} está disponível e possui - ${produtos.quantidade} em estoque`)

      
    })
    }
}
     

    //agora que o Mercado e o Carrinho existem, irei adicionar produtos
const mercado = new Mercado(`Mercadinho`)
const carrinho = new Carrinho()

//como criei as classes elas só servem para armazenar informações
// as classes em sí nao existem de fato
// no proximo passo farei o sistema validar a existência delas//
const doce1 = new Produtos(`Chocolate Nestlé`, 10.50,1 )
const doce2 = new Produtos(`Chocolate Garoto`, 9.50, 1)
const doce3 = new Produtos(`Bolacha Recheada Passatempo`, 5.00, 1)
const doce4 = new Produtos(`Bolacha recheada Oreo pct 9un`, 6.00, 1)
const doce5 = new Produtos(`Caixa bombom nestlé`, 14.99, 1)


 
const bebida1 = new Produtos(`Suco tampico laranja`,12.5 ,1)
const bebida2 = new Produtos(`Guaramix`, 7.99 ,1)
const bebida3 = new Produtos(`GuaraVitton`, 8.5 ,1)
const bebida4 = new Produtos(`Skoll`, 5.50 , 1)
const bebida5 = new Produtos(`Jack Daniels`, 8.80 , 1)
const bebida6 = new Produtos(`Pitchulinha sabores`, 4.40 , 1)
const bebida7 = new Produtos(`Pitu`, 40.00 ,1)

mercado.addProduto(doce1)
doce1.reporProduto(5)
doce1.reporProduto(5)
doce1.reporProduto(5)

mercado.mostrarEstoque()

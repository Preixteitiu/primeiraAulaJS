

class Produto {
    constructor (nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    
    exibirProduto(){
        console.log (`${this.nome} - R$ ${this.preco} | Estoque ${this.quantidade}`)
    }
    
    vender(){
        if(this.quantidade > 0 ){
           this.quantidade -- 
         console.log (`Unidade de ${this.nome} foi vendido`)
    } else{
        console.log(`${this.nome} está sem estoque`)
    }
    }
    
    repor(qtReposicao){
        if(this.quantidade > 0){
            this.quantidade += qtReposicao
            console.log (`${this.quantidade} de ${this.nome} adicionadas ao estoque`)
        }
        else{
            console.log(`Quantidade inválida`)
        }
    }
}

class Bebida extends Produto{
    constructor(nome, preco, quantidade, tamanho){
        super(nome, preco, quantidade)
        this.tamanho = tamanho
    }
    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco} tamanho - ${this.tamanho}| Estoque ${this.quantidade}`)
    }
}

class Comida extends Produto{
    constructor(nome, preco, quantidade, tipo){
        super(nome, preco, quantidade)
        this.tipo = tipo
    }
    exibirProduto(){
        console.log(`${this.nome} - R$ ${this.preco}
            ${this.tipo} | Estoque ${this.quantidade}`)
    }
}

class Pedido{
    constructor(cliente){
        this.cliente = cliente
        this.itens = []
    }
    adicionarItem(produto){
        if(produto.quantidade > 0){
            this.itens.push(produto)
        } else{
            console.log (`${this.nome} está em estoque`)
        }
    }

    removerItem(){
        if (this.itens.length > 0){
           let remover = this.itens.pop()
            console.log(`O item ${remover.nome} foi removido `)
        } else{ console.log('não é possível remover itens')
            
        }
    }

    verPedidos(){
        console.log (`${this.itens}`)
        if(this.itens.length === 0){
            console.log (`Pedido sem produtos`)
        }
    this.itens.forEach((item, index,) =>{
        console.log(`${index + 1} - ${item.nome} R$ ${item.preco}`)

    })
    }
    
    calcularTotal(){
        let total = 0
        
        this.itens.forEach(item => {
            total += (item.preco)
        });
    
        return total
    }

    fecharPedido(){
        this.verPedidos()

        console.log(`Total a pagar ${this.calcularTotal()}`)
    }


    contarItens(){
        return console.log(`Você tem ${this.itens.length} itens no carrinho`)
    }
        
    }
   

class Cafeteria {
    constructor(nome){
        this.nome = nome
        this.cardapio = []
    }

    adicionarProduto(produto){
        this.cardapio.push(produto)

        console.log(`${produto.nome} foi adicionado ao pedido`)
    }

    listarCardapio(){
        
        console.log(`\n --- CARDAPIO DA CAFETERIA ${this.nome} ---`)

        if(this.cardapio.length === 0){
            console.log(`Nenhum produto no cardápio`)

            return
        }
        
        for(let i = 0; i < this.cardapio.length; i++){
            let produto = this.cardapio[i]

            console.log((i + 1) + '.' + produto.nome + ' - R$' + produto.preco)
        }
    }

    buscarProduto(){
        return this.cardapio.find(produto => produto.nome)
    }

    mostrarDisponiveis(){
        console.log(`--- ITENS DISPONÍVEIS ---`)
        this.cardapio.forEach((produto) => {
            if (produto.quantidade > 0){
                console.log(`${produto.nome} R$ ${produto.preco}`)
            }
        })
    }
}
    //Main
const cafeteria = new Cafeteria('Cafezão')
    
    //Bebidas
const cafeExpresso = new Bebida ('Cafezinho', 5, 1, 'Pequeno')
const capuccino = new Bebida('Capuccino', 10, 1, 'Grande')
    
    
    //Gomidas
const paoQue = new Comida ('Pão de queijo', 10, 5, 'Salgado')
const croissant = new Comida ('Croissant', 25, 2, 'Salgado')
const torta = new Comida ('Torta de Morango', 15, 2, 'Doce')

cafeteria.adicionarProduto(cafeExpresso)
cafeteria.adicionarProduto(capuccino)
cafeteria.adicionarProduto(paoQue)
cafeteria.adicionarProduto(croissant)
cafeteria.adicionarProduto(torta)

cafeteria.listarCardapio()

const pedido1 = new Pedido('isaque')
pedido1.adicionarItem(capuccino)
pedido1.adicionarItem(paoQue)
pedido1.adicionarItem(torta)
pedido1.adicionarItem(croissant)


pedido1.contarItens()


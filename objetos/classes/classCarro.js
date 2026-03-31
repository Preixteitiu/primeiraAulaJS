class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca, 
        this.modelo = modelo,
        this.cor = cor
    }
}

//new === noco, quer dizer que estamos criando uma instância nova
let carro = new Carro('Toyota', 'Corolla', 'Cinza')
let carro2 = new Carro('SUbaru', 'Imprenza', 'Azul')

console.log(carro)
console.log(carro2)
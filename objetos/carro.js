const meuCarro = {
    modelo: 'Toyota',
    cor: 'Prata',
    ano: 2011,
    classe: 'Sedan',
    flex: 'sim',
}
 console.log(meuCarro)

 const novoCarro = {
    ...meuCarro,
    modelo: 'Esportivo',
    preco: 500.000
 }
 console.log(novoCarro)
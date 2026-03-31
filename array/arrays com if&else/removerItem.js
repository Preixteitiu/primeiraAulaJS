let compras = ['pao', 'leite', 'cafe', 'acuca'];


if (compras.includes('cafe')) {
const i = compras.indexOf('cafe') 
compras.splice(i, 1)
} else{
    console.log('nao tem cafe')
}

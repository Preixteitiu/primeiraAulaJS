let estoque = ['pao', 'leite', 'cafe', 'azuga'];

if (estoque.includes('cafe'));{
    const i = estoque.indexOf('cafe')
    estoque.splice(i, 1)
}; if (estoque.includes('manteiga')){
    estoque.push('manteiga')
};

console.log(estoque.sort())
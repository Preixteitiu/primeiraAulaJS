function percentual (aprovados, total){
    return (aprovados / total)*100
}
const aprovados = 15
const total = 25

if (total <=0 || aprovados > total){
    console.log('Dados inválidos')
} else {
    const resposta =  percentual (aprovados, total)
    
    if (resposta >=70){
        console.log(`Aprovados:${resposta}%`)
    } else{
        console.log(`Reprovados: ${resposta}%`)
    }
}


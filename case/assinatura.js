function assinaturas (planos){
    switch (planos){
        case 'basic': 
            return 'Seu plano é básico e possui anúncios'
        case 'PRO':
            return 'Seu plano é o PRO, e não contém anúncios'
        case 'PREMIUM':
            return 'Seu plano é o PREMIUM, não contém anúncios e possui suporte imediato'
        default:
            return 'cadastro inexistente' 
}
} console.log(assinaturas('jdslasj'))
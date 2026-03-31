function pedidos (opcoes){
    switch (opcoes){
        case 1: 
        return 'Você escolheu um hambúrguer'
        case 2:
        return 'Você escolheu uma pizza'
        case 3:
        return 'Você escolheu água'
        default: 
        return 'Escolha uma das opções listadas'
    } 

}
console.log(pedidos(3))
function calcular (a, b, operacao){
    switch (operacao){
        case '+':
         return a + b
        case '-':
         return a - b
        case '*':
         return a * b
        case '/':
            if (b > 0){
                return a / b
            } else{
                return `O número ${b} não pode ser dividido por 0`
            }
        
    }
    
} console.log(calcular(3, 7, '*'))

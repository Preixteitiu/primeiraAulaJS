// função de média + if/else (aritimético + função + if)
// crie "media(n1, n2)" que retorne (n1+n2)/2. No programa, se media >=7 mostre "aprovado, senão reprovado
function media  (n1, n2){
    return (n1 + n2) /2
}  
let nota = media (6, 8)
if (nota >=7){
    console.log ('aprovado')
} else {
    console.log ('reprovado')
}
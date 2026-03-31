// calculo sem function
const base = 5
const altura = 3

const area = base * altura

console.log ("calc sem function", area)

// calculo com function
function calcularArea(base, altura) {
// return é para retornar as atribuições de function
    return base * altura
};
console.log ("calc 1", calcularArea(5,3))

// escopos
function filho (){
    return "soou o filho"
}

function pai(){
    const msg = filho() // sou o filho
    //template do string
    return `sou o pai e chamei o filho ${msg}`};
    console.log(pai());
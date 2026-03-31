function implica (p, q){
    return ((!p) || q)
}
let p = true
let q = true
if (implica(p, q)){
    console.log (`as constantes P e Q são verdadeiras`)
} else{
    console.log (`as constantes P e Q são falsas`)
}
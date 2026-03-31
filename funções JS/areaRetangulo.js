function areaRetangulo(base, altura){
    return base * altura
};
function areaEhMultiplaDe (area, k){
    return area % k === 0 
};
console.log(areaEhMultiplaDe(areaRetangulo(100, 50),25))
 
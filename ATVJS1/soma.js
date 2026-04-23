const prompt = require("prompt-sync")();

const n1 = Number (prompt('digite um número: '))
const n2 = Number (prompt('digite outro número: '))


function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(n1, n2));

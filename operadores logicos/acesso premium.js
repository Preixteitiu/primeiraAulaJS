// declare "ehPremium, pagouHoje e bloqueado" e verifique se tem "acesso premium": ehPremium || (pagouHoje && !bloqueado)

let ehPremium = true
let pagouHoje = true
let bloqueado = false
 console.log('acesso premium', ehPremium || (pagouHoje && !bloqueado)) 
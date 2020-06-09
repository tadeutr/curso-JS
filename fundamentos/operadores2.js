// Operadores relacionais

console.log("1)", 1 === 1) // 1 é igual a 1?
console.log('2)', 3 < 2) //3 é maior que 2?

///// estudo de operadores
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //isso é:|| "ou" ou seja trabalho1 ou trabalho2
    const comprarTV50 = trabalho1 && trabalho2 //isso é:&& "e" ou seja, trabalho1 e trabalho2
    const comprarTV32 = trabalho1 != trabalho2 // != negação lógica
    const manterSaldavel = !comprarSorvete // != negação lógica

    return{comprarSorvete, comprarTV50, comprarTV32, manterSaldavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
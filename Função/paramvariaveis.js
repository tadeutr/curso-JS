function soma() {
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))



//// Parametro Padrão

function soma1(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1(1, 2, 3))

console.log(soma1(0, 0, 0))
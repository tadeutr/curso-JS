// Função em JS é First-Class Object

// declarar e criar a função de forma literal

function fun1() { }

// Pode armazenar uma função dentro de uma variável

const fun2 = function () { }

//Passar uma função como parametro 

function run(fun) {
    fun()
}


/// Parametros e retornos são opcionais.

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(5,5))
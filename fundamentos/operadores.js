//// atribução para operadores
const k = 7
let o = 3
o += k  //Mesmo que: b= b+a
console.log(o)

///// Destructuring
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: 'Rua ABC, 1000'
}
console.log(pessoa)

/////////Destructuring

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([992]))


///////////////////// operadores aritméticos
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a

console.log(soma, subtracao, multiplicacao, divisao)
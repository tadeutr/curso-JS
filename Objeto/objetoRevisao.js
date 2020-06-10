// criação de objetos
const produto = new Object
produto.nome = 'Cadeira'
produto.marca = 'Generico'
produto.valor = 220

console.log(produto)

delete produto.nome
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: 'Rua ABC'
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 22
    }]
}

carro.proprietario.endereco.numero = 1000

console.log(carro)
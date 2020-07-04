const { Console } = require("console")

// usando Spread com obejto
const funcionario = { nome: 'Maria', salario: 12345.55}
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar Spread com Array
const grupoA = ['Joao', 'Maria', 'Joaquim']
const grupoFinal = ['Moacir', ...grupoA, 'Francisco']

console.log(grupoFinal)


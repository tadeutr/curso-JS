/// objetivo da herança é reutilizar código através de mecanimos

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) //não encontrou o atribuito 1 no filho, foi pro pai e depois para o avo

///// exemplo 2

const mae = { nome: 'Maria', corCabelo: 'Preto'}

const filha1 = Object.create(mae)
filha1.nome = 'Ana'

console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`) // trouxe a cor de cabelo da mãe como herança

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?


// Desafio 2: Algum aluno é bolsista?
const algumbolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista))
//respondendo a pergunta
console.log(`Algum aluno é bolsista: ${alunos.map(a => a.bolsista).reduce(algumbolsista)}`)
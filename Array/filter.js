const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPAD Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 2.49, fragil: false },
]

const filtro = produtos.filter(function(p) {
    return p.preco > 2400
})

const filtro2 = produtos.filter(function(p1) {
    return p1.fragil == true
    })

console.log('Exemplo 1')
console.log(filtro)
console.log('Exemplo 2')
console.log(filtro2)


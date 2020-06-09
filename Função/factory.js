/// Função que retorna um objeto

const prod1 = {
    nome: "....",
    preco: 45
}

//// Função factory 

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
    
}

console.log(criarPessoa())


/// Exemplo 2.

function criarProduto(nome, preco) {
    return{
        nome,
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
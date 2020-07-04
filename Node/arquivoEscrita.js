const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Esse comando abaixo, cria um arquivo Json do produto acima.
fs.writeFile(__dirname + '/arquivoGerado.JSON', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})
/// this usando bind

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//// usando bind dentro da função para amarra o this no setinterval (incrementa algo em um intervalo de tempo)

function Pessoa1() {
    this.idade = 0
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa1

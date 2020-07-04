var display = document.getElementById('display');
var botao = document.getElementById('botao');
var inputValor = document.getElementById('inputValor');
var seletor = document.getElementById('option')
var extrato = document.getElementById('tabelaDeExtrato')


class ContaBancaria {
    constructor() {
        this.saldo = Number(localStorage.SaldoAtual) || 0;
    }
    depositarValor() {
        this.saldo += Number(inputValor.value)
        extratoBancario();
        display.innerHTML = MinhaConta.saldo.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
        localStorage.setItem('SaldoAtual', MinhaConta.saldo)
        inputValor.value = ''
    }
    sacarValor() {
        if (inputValor.value > this.saldo) {
            display.innerHTML = 'Saldo insuficiente'
            inputValor.value = ''
            
            setTimeout(function () {
                let numero = localStorage.getItem('SaldoAtual')
                numero = Number(numero)
                display.innerHTML = numero.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
                    
            }, 2000) 
             
        } else {
            this.saldo -= Number(inputValor.value)
            extratoBancario();
            display.innerHTML = MinhaConta.saldo.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
            localStorage.setItem('SaldoAtual', MinhaConta.saldo)
            inputValor.value = ''
        }
    }
    saldoInicial() {
        let numero = localStorage.getItem('SaldoAtual')
        numero = Number(numero)
        display.innerHTML = numero.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
    }
}

let MinhaConta = new ContaBancaria();
MinhaConta.saldoInicial();

function extratoBancario() {
    if (inputValor.value === '' || 0) {
        alert('Digite um Valor')
    } else {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td')

        td1.innerHTML = seletor.value;

        td2.innerText = `R$ ${inputValor.value}`

        tr.appendChild(td1)
        tr.appendChild(td2)
        extrato.appendChild(tr);
    }

}

botao.onclick = () => {
    if (seletor.value === 'Deposito') { MinhaConta.depositarValor() }
    else if (seletor.value === 'Saque') { MinhaConta.sacarValor() }
}
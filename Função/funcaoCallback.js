const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// forEach é uma função Callback
// ---------------------------------

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) { 
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

const notasBaixas2 = notas.filter(notas => notas < 7)

console.log(notasBaixas2)
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        (console.log('REPROVADO'))}
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

///// IF ELSE IF //////

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado")
    } else { 
        console.log('nota invalida ') 
    }
}

imprimirResultado(10)


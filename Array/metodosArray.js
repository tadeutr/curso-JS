const pilotos = ['Veteel', 'Alonso', 'Raikkonen','Massa']
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vestappen') //adiciona no ultimo indice]
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro indice
console.log(pilotos)

const cortedepilotos = pilotos.slice(2) //corta o array a partir de determ indice
console.log(cortedepilotos)
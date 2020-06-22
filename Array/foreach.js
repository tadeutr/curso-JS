const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice +1} ${nome}`)

}) // função que percorre o array, mostra o indice (+1) de cada elemento e o nome

aprovados.forEach(nome => console.log(nome)) //percorre e mostra os nomes


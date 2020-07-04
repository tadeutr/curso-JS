const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') 

// resolução do desafio
const chineses = funcionarios => funcionarios.pais === "China"
const mulheres = funcionarios => funcionarios.genero === "F"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
// fim da primeira parte (criação dos filtros)


axios.get(url).then(response => {
    const trabalhadores = response.data
        /// minha tentativa de resolver o desafio (FAIL)
        //const paraJson = json => JSON.parse(json)
        //const somenteChina = pais => pais.China
        //const resultado = json.map(paraJson).map(somenteChina)
        //console.log(resultado)

    // resolução do desafio 2 parte
    const func = trabalhadores
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)
})
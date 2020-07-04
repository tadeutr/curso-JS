const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 5', function (){
    console.log('Executa qualquer coisa programada por esse timer', new Date().getSeconds())
})

//*    *    *    *    *    *
//┬    ┬    ┬    ┬    ┬    ┬
//│    │    │    │    │    │
//│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
//│    │    │    │    └───── month (1 - 12)
//│    │    │    └────────── day of month (1 - 31)
//│    │    └─────────────── hour (0 - 23)
//│    └──────────────────── minute (0 - 59)
//└───────────────────────── second (0 - 59, OPTIONAL)

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 10000)

//// Utilizando o RecurrenceRule

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const = tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})

//executará a função definida na const regra ( de segunda a sexta às 12:00:30hrs)
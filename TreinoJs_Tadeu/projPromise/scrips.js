const resultado1 = document.getElementById('users1')
const resultado2 = document.getElementById('users2')

//const botao1 = document.querySelector('botao1')
//const botao2 = document.querySelector('botao2')
const url = 'https://jsonplaceholder.typicode.com/users'


function botao1() {

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)

            return data.map(function (user) {
                let li = document.createElement('li');
                li.innerHTML = `${user.name} (${user.username})`
                resultado1.appendChild(li)
            })

        })
        .catch((error) => {
            console.log('Opps!' + error);
        })

}


function botao2() {

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)

            return data.map(function (user) {
                let li = document.createElement('li');
                li.innerHTML = `${user.name} (${user.email})`
                resultado2.appendChild(li)
            })

        })
        .catch((error) => {
            console.log('Opps!' + error);
        })

}
const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        // console.log(response)
        for(let todo of response.data){
            console.log((todo.completed ? '✅' : '❌') + '\t' + todo.title)
        }
    })
    .catch((err) => {
        console.error(err)
    })

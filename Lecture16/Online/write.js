const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'

const DB_NAME = 'tododb';

// async function writeTask(){

//     const client = await MongoClient.connect(MONGO_URL)
//     const tododb = client.db(DB_NAME)

//     const todos = tododb.collection('todos')

//     const todo = {
//         task: 'an important task',
//         priority: 2,
//         owner: 'Manager'
//     }

//     const result = await todos.insertOne(todo)
//     console.log(result);

// }

async function writeTask(){

    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    const result = await todos.insertMany([
        {task: 'next task', priority: 4, owner: 'Security'},
        {task: 'amazing task', priority: 1},
        {task: 'some task', priority: 3, owner: 'Manager'},
        {task: 'extra one task'}
    ])
    console.log(result);

}

writeTask()
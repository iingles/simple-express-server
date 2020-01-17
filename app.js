const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 5000

const Person = class {
    constructor(name, age, city) {
        this.name = name,
        this.age = age,
        this.city = city
    }
}

let person = new Person('Isaac', '36', 'West Jordan')

//Parse incoming request bodies
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res, next)=>{
    res.send("Welcome to my server!")
})

app.get('/api', (req, res, next)=>{
    res.send(JSON.stringify(person))
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
const express = require("express")
const mysql = require("mysql2")
const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'crud_aula',
    user: 'root',
    password: "senai"
})

connection.connect()

app.post('/clientes', async)

app.get('/', (req, res)=> {
    res.send("Hello world!")
})


app.listen(port, ()=> {
    console.log("API funcionando")
})

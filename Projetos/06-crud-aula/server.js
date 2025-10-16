const express = require("express")
const mysql = require("mysql2/promise")
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


app.post('/clientes', async (req, res) => {
    const {nome, endereco, email, telefone} = req.body;
    try {
        const [result] = await connection.query(
            `INSERT INTO
            cliente
            (nome, endereco, email, telefone)
            VALUES
            (?, ?, ?, ?)`, 
            [nome, endereco, email, telefone]
        );
        let idInserido = result.insertId
        res.status(201).json({
            idInserido,
            nome,
            endereco,
            email,
            telefone
        })
    } catch (errinho) {
        console.error(errinho.message)
        res.status(500).json({erro: "Falha do servidor ao criar o cliente"})
    }
})

app.get('/', (req, res)=> {
    res.send("Hello world!")
})


app.listen(port, ()=> {
    console.log("API funcionando 2.0")
})

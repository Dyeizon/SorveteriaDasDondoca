const express = require('express');
const {Pool} = require("pg");
const credentials = require('./database/credenciais');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/clientes", (req, res) => {
    res.render('clientes');
})

app.get("/sorvetes", (req, res) => {
    res.render('sorvetes');
})
app.listen("80", (error) => {
    if(error) {
        console.log("Ocorreu um erro na inicialização do servidor");
    } else {
        console.log("O servidor foi inicializado");
    }
})
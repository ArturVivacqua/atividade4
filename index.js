module.exports = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};
No arquivo index.js, você pode criar a aplicação Express.js com as rotas especificadas:

javascript
Copy code
// index.js
const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (b === 0) {
        res.status(400).send('Erro: Divisão por zero');
        return;
    }
    const resultado = calculadora.dividir(a, b);
    res.send(resultado.toString());
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src')); // Serve arquivos estáticos, incluindo ícones e estilos

// Rota para a página de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/Login/index.html');
});

// Rota para processar o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).send('Erro no servidor');
        } else if (row) {
            res.redirect('/Login/success.html');
        } else {
            res.status(401).send('Credenciais inválidas');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
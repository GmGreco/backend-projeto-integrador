const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async(req, res) => {
    res.send("Página inicial");
});

app.post("/cadastrar", async(req, res) => {

    await User.create(req.body)
    .then(() => {
        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message:"Erro!"
        })
    })

    res.send("Página cadastrar");
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("Servidor iniciado");
})
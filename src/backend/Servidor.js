const express = require ("express");
const cors = require ("cors");
const banco = require ("mysql");
const servidor = express();

servidor.use(cors());

// INICIAR SERVIDOR
servidor.listen("9000", ()=>{
    console.log("Ta rodando!");
});

// CONECTAR NO BANCO
const conexao = banco.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_react"
});

servidor.get("/read",(requisicao, resposta)=>{
    var sql = "select * from clientes";
    conexao.query(sql, (erros, resultado)=>{
        if (erros)
            return resposta.json(erros)
        else
            return resposta.json(resultado);
    })
});


servidor.post("/create", (req, res)=>{
    const sql = "INSERT INTO clientes (nome, datanasc, banco, conta) VALUES (?)";

    const valores = [
        req.body.txtNome,
        req.body.txtDataNasc,
        req.body.txtBanco,
        req.body.txtConta
    ]

    conexao.query(sql,[valores], (erros, resultado)=>{
        if (erros)
            return ("Deu pau").json
        else
            return ("Sucesso").json;
    })
})


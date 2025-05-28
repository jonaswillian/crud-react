const express = require ("express");
const banco = require ("mysql");
const servidor = express();

// INICIAR SERVIDOR
servidor.listen("9000", ()=>{
    console.log("Ta rodando!");
});

// CONECTAR NO BANCO
const conexao = banco.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "drivelog"
});

servidor.get("/",(requisicao, resposta)=>{
    var sql = "select * from veiculos";
    conexao.query(sql, (erros, resultado)=>{
        if (erros)
            return resposta.json(erros)
        else
            return resposta.json(resultado);
    })
});


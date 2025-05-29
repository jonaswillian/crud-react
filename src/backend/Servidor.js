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
    database: "drivelog"
});

servidor.get("/read",(requisicao, resposta)=>{
    var sql = "select * from veiculos";
    conexao.query(sql, (erros, resultado)=>{
        if (erros)
            return resposta.json(erros)
        else
            return resposta.json(resultado);
    })
});


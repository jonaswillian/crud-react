import React, {useEffect, useState} from 'react';
import icone from '../cliente.png';
import '../Style.css';
import axios from 'axios';

export default function Listar(){

    const [dados, alterarDados] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/read')
        .then(resposta => alterarDados(resposta.data))
        .catch(bug=> console.log("deu pau"))
    })
    

    // BUSCA OS DADOS NA ROTA DO SERVIDOR
    


    return (
        <div className='tela'>
            <p className='titulo_pagina'>Lista de Clientes</p>
            <p className='paragrafo'>
                Aqui está a lista de clientes cadastrados no sistema.
            </p>

            {
                dados.map((linha, id)=>(
                    <div className='cliente' key={id}>
                        <img src={icone} className='icone_cliente' />
                        <p className='nome_cliente'>{linha.nome}</p>
                        <p className='banco_cliente'>{linha.banco}</p>
                        <p className='conta_cliente'>{linha.conta}</p>
                    </div>
                ))
                
            }

            <a href="/" className='botao_voltar'>VOLTAR</a>
        </div>
    )
}
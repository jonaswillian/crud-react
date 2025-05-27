import React from 'react';
import icone from '../cliente.png';
import '../Style.css';

export default function Listar(){
    return (
        <div className='tela'>
            <p className='titulo_pagina'>Lista de Clientes</p>
            <p className='paragrafo'>
                Aqui está a lista de clientes cadastrados no sistema.
            </p>

            <div className='cliente'>
                <img src={icone} className='icone_cliente' />
                <p className='nome_cliente'>Jão</p>
                <p className='banco_cliente'>Banco do Brasil</p>
                <p className='conta_cliente'>4455-5</p>
            </div>

            <div className='cliente'>
                <img src={icone} className='icone_cliente' />
                <p className='nome_cliente'>Jão</p>
                <p className='banco_cliente'>Banco do Brasil</p>
                <p className='conta_cliente'>4455-5</p>
            </div>

            <div className='cliente'>
                <img src={icone} className='icone_cliente' />
                <p className='nome_cliente'>Jão</p>
                <p className='banco_cliente'>Banco do Brasil</p>
                <p className='conta_cliente'>4455-5</p>
            </div>
            <a href="/" className='botao_voltar'>VOLTAR</a>
        </div>
    )
}
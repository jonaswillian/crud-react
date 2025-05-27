import React from "react";
import erro from '../404.gif';

export default function PageNotFound(){
    return (
        <div className='tela'>
            <p className="titulo_pagina">Esta página não existe</p>
            <img src={erro} className='gif_404' />
            <a href="/" className="botao_voltar">VOLTAR</a>
        </div>
    );
}
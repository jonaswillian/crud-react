import {useState} from 'react';
import '../Style.css';
import axios from 'axios';
import Listar from './Listar';
export default function Cadastrar(){

    const [txtNome, controlarNome] = useState('');
    const [txtDataNasc, controlarDataNasc] = useState('');
    const [txtBanco, controlarBanco] = useState('');
    const [txtConta, controlarConta] = useState('');

    function enviarFormulario(event){
        event.preventDefault();
        axios.post("http://localhost:9000/create", {txtNome, txtDataNasc, txtBanco, txtConta})
        .then(console.log("Deu show"))
        .catch(console.log ("Deu pau"))
    }
    
    return (
        <div className="tela">
            <p className='titulo_pagina'>Página de Cadastro</p>
            <p className='paragrafo'>
                Digite os dados do cliente e clique em salvar
                para cadastrá-lo no banco de dados.
            </p>
            <form onSubmit={enviarFormulario}>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label>Nome Completo:</label>
                    <input type="text" value={txtNome} name="nome" onChange={ (txtNome) => controlarNome(txtNome.target.value) } />

                    <label>Data de Nascimento:</label>
                    <input type="date" name="datanasc" value={txtDataNasc} onChange={ (txtDataNasc)=> controlarDataNasc(txtDataNasc.target.value) }  />
                </fieldset>

                <fieldset>
                    <legend>Dados Bancários</legend>
                    <label>Banco:</label>
                    <select name="banco" value={txtBanco} onChange={(txtBanco)=>controlarBanco(txtBanco.target.value)}>
                        <option></option>
                        <option>Banco do Brasil</option>
                        <option>Caixa</option>
                        <option>Bradesco</option>
                    </select>

                    <label>Conta-Corrente:</label>
                    <input type="text" name="conta" value={txtConta} onChange={(txtConta)=>controlarConta(txtConta.target.value)} />
                </fieldset>
                <input type='submit' value="Gravar Cliente" style={{width:'75%', marginLeft:'10%'}} />
            </form>
            <a href="/" className="botao_voltar">VOLTAR</a>
        </div>
    )
}
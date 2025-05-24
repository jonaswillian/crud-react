import '../Style.css';
export default function Cadastrar(){
    return (
        <div className="tela">
            <p className='titulo_pagina'>Página de Cadastro</p>
            <p className='paragrafo'>
                Digite os dados do cliente e clique em salvar
                para cadastrá-lo no banco de dados.
            </p>
            <form>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label>Nome Completo:</label>
                    <input type="text" name="nome" />

                    <label>Data de Nascimento:</label>
                    <input type="date" name="datanasc" />
                </fieldset>

                <fieldset>
                    <legend>Dados Bancários</legend>
                    <label>Banco:</label>
                    <select name="banco">
                        <option></option>
                        <option>Banco do Brasil</option>
                        <option>Caixa</option>
                        <option>Bradesco</option>
                    </select>

                    <label>Conta-Corrente:</label>
                    <input type="text" name="conta" />
                </fieldset>
            </form>
        </div>
    )
}
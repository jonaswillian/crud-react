import cliente from '../logo.png';
import '../Style.css';

export default function Inicio() {

  return (
    <div className='tela'>
      <img src={cliente} className='logo_entrada' />
      <p className='titulo_entrada'>Bem-vindo ao Sistema de <br /> Gerenciamento de Clientes</p>

      <div className='menu_entrada'>
        <a href="Cadastrar" className='botao_entrada'>Cadastrar Cliente</a><br />
        <a href="Listar" className='botao_entrada'>Listar Clientes</a><br />
      </div>
    </div>
  );
}

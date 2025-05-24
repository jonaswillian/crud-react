import cliente from './cliente.png';
import './Style.css';
import Cadastrar from './Paginas/Cadastrar';


function App() {

  return (
    <div className='tela'>
      <img src={cliente} className='logo_entrada' />
      <p className='titulo_entrada'>Bem-vindo ao Sistema de <br /> Gerenciamento de Clientes</p>

      <div className='menu_entrada'>
        <a href="" className='botao_entrada'>Cadastrar Cliente</a><br />
        <a href="" className='botao_entrada'>Listar Clientes</a><br />
      </div>
    </div>
  );
}

export default Cadastrar;

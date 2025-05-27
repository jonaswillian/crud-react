import '../Style.css';
import Listar from './Listar';
import Cadastrar from './Cadastrar';
import Inicio from './Inicio';
import PageNotFound from './PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/listar' element={<Listar />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

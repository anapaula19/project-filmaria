
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Filme from './pages/Filme';
import Header from './component/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const MinhasRotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>        
        </BrowserRouter>
    );
}

export default MinhasRotas;
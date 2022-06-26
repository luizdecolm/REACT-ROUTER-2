//
import  './App.css';
import React from 'react';

import  Nav from './components/Nav';
import Home from './components/Home';
import Aula from './components/Aula';
import Aulas from './components/Aulas';
import Sobre  from './components/Sobre';




import{ Routes, Route} from 'react-router-dom'


//Fechar as TAGS nelas mesmas, assim: <Home/>.
//Criar o caminho para renderização, path, no caso do home é o barra "/".
//path="*" , significa rota inexistente. Sempre no final.

  function  App() {
  return (
    
    <div className="App">
        <Nav/>
      
      
      <Routes>      
       
      <Route exact path="/" element={<Home />}></Route>

      
      <Route  path="/aulas/:id" element={<Aula/>}></Route>

      <Route  path="/aulas" element={<Aulas/>}></Route>

      <Route  path="/sobre" element={<Sobre/>}></Route>

      <Route path="*" element={<div className="page">Essa rota não existe!</div>}></Route>
       
      </Routes>
      
      
    </div>
    
    );
}




export default App
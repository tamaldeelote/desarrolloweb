import { useState } from 'react';
import logo from './felix2.gif';
import './App.css';
import Primerformulario from './componentes/Primerformulario';

function App() {
  const [personaNombre, setPersona] = useState("Jassiel");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Primerformulario
        personaNombre = {personaNombre} 
        />
        
      </header>
    </div>
  );
}

export default App;

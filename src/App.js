import logo from './felix.gif';
import './App.css';
import Primerformulario from './componentes/Primerformulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Primerformulario></Primerformulario>
        
      </header>
    </div>
  );
}

export default App;

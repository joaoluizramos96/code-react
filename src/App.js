import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="João"/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="João"
        idade="25"
        profissao="Analista de Redes"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

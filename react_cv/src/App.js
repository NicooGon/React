import './App.css';
import { Barra } from './Componentes/barraIzquierda/barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Estudios } from './Componentes/Estudios/estudios';


function App() {
  return (
    <div id="principal" class="row d-flex flex-column flex-md-row">
       <Barra></Barra>
       <Estudios></Estudios>
      </div>
      
  );
}

export default App;

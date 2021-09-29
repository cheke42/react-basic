import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import GitTest from './components/GitTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional desde una prop"/>
          <hr></hr>
          <Propiedades 
              cadena="Esto es una cadena de texto" 
              numero={19} 
              booleano={true}
              arreglo={[1,2,3]}
              objeto={{nombre:"Juan",email:"example@a.com"}}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={<Componente msg="Esto es un segundo mensaje"/>} 
          />
          <hr></hr>
          <Estado />
          <hr></hr>
          <RenderizadoCondicional />
          <hr></hr>
          <RenderizadoElementos />
          <hr></hr>
          <GitTest saludo="Un saludo"/>
          
      </section>
      </header>
      
    </div>
  );
}

export default App;

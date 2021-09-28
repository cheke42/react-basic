import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = 'Cheke'
  let auth = true
  let estaciones = ['primavera','verano','otoño','invierno']
  return (
    <div className="App">
      <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario está logueado" : "El usuario no esta logueado"}</p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <p>{2+2}</p>
        <ul>
          {estaciones.map((el,index) => <li ley={index}>{el}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      </>
    </div>
  );
}

export default App;

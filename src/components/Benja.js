import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from './navbar.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Menu.css'

function VerRegistro() {
  return (
    <body>
      <header class ="title">
        <h1> Diseño de software </h1>
      </header>
      <div> 
        <nav class= ''>
          <NAV title='navbar'/>
        </nav>
      </div>  
      
      <main class="shadow content">
        <h2>Me llamo Benjamin Gonzalez</h2>
        <h3>Estoy en cuarto año de ingenieria civil informatica
        </h3>
        <p>Mis pasatiempos son:</p>
        <br></br>
        <ul>
          <li>Jugar futbol</li>
          <li>Salir con mis amigos</li>
          <li>Jugar juegos de pc</li>
          <li>Ver series y peliculas</li>
        </ul>

      </main>
      <footer class="footer"> 
      </footer>
    </body>

  );
}export default VerRegistro;

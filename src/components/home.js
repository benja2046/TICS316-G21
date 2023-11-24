import React from 'react';
import logoR from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from "./navbar.js";
import Footer from "./footer.js";

function Home() {
  return (
    <body>
      <header class="title">
        <h1>Hola</h1>
      </header>
      <div>
        <nav class="">
          <NAV title="navbar" />
        </nav>
      </div>

      <div class="Home ">
        <div class="Container shadow">
          <div class="Column-Text shadow">
            <br />
            <p>¿Estas Listo?</p>
            <p>Adentrate a encontrar tu solucion</p>
            <br />
          </div>
          <div class="logoContainer ">
            <img
              src={logoR}
              alt="logoIcon"
              class="logoIcon shadow"
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;

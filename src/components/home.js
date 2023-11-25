import React from 'react';
import logoR from '../assets/logo.png';
import NAV from "./navbar.js";
import './home.css'

function Home() {
  return (
    <div className='Home'>
      <header className='header'>
        
        </header>
      <div>
        <nav title="navbar">
          <NAV title="navbar" />
        </nav>
      </div>
      <div class=" ">
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
    </div>
  );
}

export default Home;

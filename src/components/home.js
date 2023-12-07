import React from 'react';
import logoR from '../assets/logo.png';
import NAV from "./navbar.js";
import './home.css';
import Footer from './footer.js';

function Home() {
  return (
    <div className='Home'>
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
            <p>Comparte tus ideas y problemas que quieres solucionar.</p>
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
      <footer>
        <Footer title='footer' />
      </footer>
    </div>
  );
}

export default Home;

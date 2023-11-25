import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NAV from "./navbar.js";
import './contact.css'

function Contact() {
  return (
    <div className='Contact'>
      <header class="title">
        <h1>Welcome</h1>
      </header>
      <div>
        <nav class="">
          <NAV title="navbar" />
        </nav>
      </div>

      <div class="">
        <div class="subtitle Column-Text1 shadow">Comunicate con Nosotros</div>

        <div class="Container shadow">
          <div class="Column-Text1 shadow box-1">
            <br />
            <p>Teléfono</p>
            <ul>
              <li>+### #### ####</li>
              <li>#### #### ####</li>
            </ul>
            <br />
          </div>
          <div class="Column-Text1 shadow box-2">
            <br />
            <p>Correo</p>
            <ul>
              <li>++++++@+++.com</li>
            </ul>
            <br />
          </div>
          <div class="Column-Text1 shadow box-3">
            <br />
            <p>Dirección</p>
            <p>Encuentra nuestras oficinas en</p>
            <ul>
              <li>+++++++ ####, Santiago</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;

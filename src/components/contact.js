import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NAV from "./navbar.js";
import './contact.css'

function Contact() {
  const { username } = useParams(); // Obtiene el parámetro de la URL (nombre de usuario)
  const [userData, setUserData] = useState({
    username: 'Nombre de usuario',
    bio: 'Una breve descripción sobre ti',
    imageUrl: 'https://via.placeholder.com/150',
  });

  const searchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const randomUserData = data.results[0];
      setUserData({
        username: randomUserData.login.username,
        bio: 'Una breve descripción sobre ti',
        imageUrl: randomUserData.picture.large,
      });
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  const searchUserByUsername = async (username) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?seed=${username}`);
      const data = await response.json();
      
      // Extrae la información del primer resultado (puedes ajustar según la estructura de la respuesta)
      const user = data.results[0];
  
      // Actualiza el estado con la información del usuario encontrado
      setUserData({
        username: `${user.name.first} ${user.name.last}`,
        bio: 'Una breve descripción sobre ti',
        imageUrl: user.picture.large,
      });
    } catch (error) {
      console.error('Error fetching user by username:', error);
    }
  };
  

  useEffect(() => {
    if (username) {
      searchUserByUsername(username);
    } else {
      searchRandomUser();
    }
  }, [username]);
  return (
    <div className='Contact'>
      <header class="title">
        <h1>Welcome</h1>
      </header>
      <div>
        <nav class="">
          <NAV title="navbar"  onSearch={searchRandomUser} />
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

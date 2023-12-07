import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NAV from "./navbar.js";
import './contact.css'
import Footer from "./footer.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
    <div className="Contact">
      <div>
        <nav class="">
          <NAV
            title="navbar"
            onSearch={searchRandomUser}
          />
        </nav>
      </div>

      <div class="">
        <div class="subtitle Column-Text1 shadow">Comunicate con Nosotros</div>

        <div
          class="Container"
          id="contact-cards"
        >
          <div>
            <Row
              sm={1}
              lg={3}
              className=" py-2 px-4"
            >
              <Col className="p-2">
                <Card
                  className="Column-Text1 shadow h-100 box-1  "
                  bg="light"
                >
                  <Card.Body>
                    <Card.Title className="Column-Title1">Teléfono</Card.Title>
                    <Card.Body>
                      <div>+569 2100 2132</div>
                      <div>+7255 3011</div>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2">
                <Card
                  className="Column-Text1 shadow h-100 box-2"
                  bg="light"
                >
                  <Card.Body>
                    <Card.Title className="Column-Title1">Correo</Card.Title>
                    <Card.Body>RCTeam@hotmail.com</Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="p-2">
                <Card
                  className="Column-Text1 shadow h-100 box-3"
                  bg="light"
                >
                  <Card.Body>
                    <Card.Title className="Column-Title1">Dirección</Card.Title>
                    <Card.Body>
                      Av. Nueva Providenia 9999, Santiago
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <footer>
        <Footer title="footer" />
      </footer>
    </div>
  );
}


export default Contact;

import NAV from './navbar.js'
import Canvas from './overlay.js'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './usuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Footer from './footer.js';

const config = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-2" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>;

function Usuario() {
  const [User, setUsername] = useState('Nombre de usuario');
 const [bio, setBio] = useState('Una breve descripción sobre ti');
 const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/150');
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

  const handleUpdateProfile = (newUsername, newBio, newImageUrl) => {
    setUsername(newUsername);
    setBio(newBio);
    setImageUrl(newImageUrl);
  };
  return (
    <div className='Acount'>
      <header className='header'>

      </header>
      <nav>

        <NAV title='navbar' onSearch={searchRandomUser}/>
    </nav>
    <body className='bodyU'>
      <Container className='mt-5'>
        <Row>
          <Col md={6}>
            <Image src={imageUrl} roundedCircle className="profile-picture" />
            <h3 className="username">{User}</h3>
            <p className="bio">{bio}</p>
            <Button variant="outline-primary">Seguir</Button>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>Publicaciones: 3</ListGroup.Item>
              <ListGroup.Item>Seguidores: 250</ListGroup.Item>
              <ListGroup.Item>Siguiendo: 150</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2}>
          
            <Canvas key="canvas"
            placement="end"
            name={config}
            updateProfile={handleUpdateProfile} />

            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="post-container">
                <Image src="https://via.placeholder.com/300x400" className="post-image" />
                <div className="post-info">
                  <p>Esta es una publicación de ejemplo</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="post-container">
                <Image src="https://via.placeholder.com/300x400" className="post-image" />
                <div className="post-info">
                  <p>Esta es una publicación de ejemplo</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="post-container">
                <Image src="https://via.placeholder.com/300x400" className="post-image" />
                <div className="post-info">
                  <p>Esta es una publicación de ejemplo</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </body>
      <footer>
        <Footer title='footer' />
      </footer>

    </div>


  );
}

export default Usuario;



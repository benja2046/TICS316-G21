import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NAV from './navbar.js';
import './usuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Footer from './footer.js';

function Usuario() {
  const { username } = useParams(); // Obtiene el parámetro de la URL (nombre de usuario)
  const [userData, setUserData] = useState({
    username: 'Nombre de usuario',
    bio: 'Una breve descripción sobre ti',
    imageUrl: 'https://via.placeholder.com/150',
    posts: [], // Agrega un array para almacenar las publicaciones
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
      const userResponse = await fetch(`https://randomuser.me/api/?seed=${username}`);
      const userData = await userResponse.json();

      const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts'); // Endpoint de publicaciones simuladas
      const allPosts = await postResponse.json();

      const numberOfRandomPosts = 10; // Puedes ajustar este número según tus necesidades
      const randomPosts = allPosts.sort(() => 0.5 - Math.random()).slice(0, numberOfRandomPosts);

    const user = userData.results[0];

      setUserData({
        username: `${user.name.first} ${user.name.last}`,
        bio: 'Una breve descripción sobre ti',
        imageUrl: user.picture.large,
        posts: randomPosts, // Almacena las publicaciones en el estado
      });
    } catch (error) {
      console.error('Error fetching user and posts:', error);
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
    <div className='Acount'>
      <header className='header'>
        {/* Puedes agregar contenido adicional al encabezado si es necesario */}
      </header>
      <nav>
        <NAV title='navbar' onSearch={searchRandomUser} />
      </nav>
      <body className='bodyU'>
        <Container className='mt-5'>
          <Row>
            <Col md={6}>
              <Image src={userData.imageUrl} roundedCircle className="profile-picture" />
              <h3 className="username">{userData.username}</h3>
              <p className="bio">{userData.bio}</p>
              <Button variant="outline-primary">Seguir</Button>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>Publicaciones: {userData.posts.length}</ListGroup.Item>
                <ListGroup.Item>Seguidores: 250</ListGroup.Item>
                <ListGroup.Item>Siguiendo: 150</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
          {userData.posts && userData.posts.map((post) => (
            <Col md={4} key={post.id}>  
    <div className="post-container">
      <Image src="https://via.placeholder.com/300x400" className="post-image" />
      <div className="post-info">
        <p>{post.title}</p>
      </div>
    </div>
            </Col>
          ))}
          </Row>
          {/* Agrega más contenido según sea necesario */}
        </Container>
      </body>
      <footer>
        <Footer title='footer' />
      </footer>
    </div>
  );
}

export default Usuario;

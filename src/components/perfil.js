import NAV from './navbar.js'
import over from './overlay.js'

import React from 'react';
import './usuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Footer from './footer.js';

function usuario() {
 return (
    <div className="App">
      <header>
        <h1>App</h1>
      </header>
      <nav>
      <NAV title='navbar'/>
    </nav>
      <Container className='mt-5'>
        <Row>
          <Col md={8}>
            <Image src="https://via.placeholder.com/150" roundedCircle className="profile-picture" />
            <h3 className="username">Nombre de usuario</h3>
            <p className="bio">Una breve descripción sobre ti</p>
            <Button variant="outline-primary">Seguir</Button>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>Publicaciones: 5</ListGroup.Item>
              <ListGroup.Item>Seguidores: 250</ListGroup.Item>
              <ListGroup.Item>Siguiendo: 150</ListGroup.Item>
            </ListGroup>
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
      <footer>
       <Footer title='footer'/>
    </footer>
    </div>
    
 );
}

export default usuario;



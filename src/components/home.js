import React from 'react';
import logoR from '../assets/logo.png';
import NAV from "./navbar.js";
import './home.css';
import Footer from './footer.js';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Row";

function Home() {
  return (
    <div className="Home">
      <div>
        <nav title="navbar">
          <NAV title="navbar" />
        </nav>
      </div>
      <div class=" ">
      <div
        class="Container"
        id="Home-cards"
      >
        <div>
          <Container className=" py-5 justify-content-center">
            <Card
              className="Column-Text shadow  box-1  "
              bg="light"
            >
              <Row className="align-items-center w-auto">
                <Col lg={8}>
                  <Card
                    className="Column-Text shadow  box-1  "
                    bg="light"
                  >
                    <Card.Body>
                      <Card.Title className="Column-Title1">
                        ¿Estas Listo?
                      </Card.Title>
                      <Card.Body>
                        Comparte tus ideas y problemas que quieres solucionar.
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  className="justify-content-center"
                >
                    <Card.Img
                      variant="Top"
                      src={logoR}
                    />
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </div>
      </div>


      <footer>
        <Footer title="footer" />
      </footer>
    </div>
  );
}

export default Home;

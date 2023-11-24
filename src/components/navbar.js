import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
function NAV() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand class="rounded-circle" href="/home"><img src={Logo} class='rounded-circle' width="50" height="50" alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/perfil')}>Perfil</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/about')}>About</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/publicaciones')}>publicaciones</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/contact')}>contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAV;

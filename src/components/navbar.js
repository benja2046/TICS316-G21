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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand class="rounded-circle" href="/"><img src={Logo} class='rounded-circle' width="50" height="50" alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Miembros" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/miembro1')}>Perfil</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/about')}>
                
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/registrar-auto')}>
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAV;

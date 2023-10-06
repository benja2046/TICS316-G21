import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'

function NAV() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/Menu">MENU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Miembros" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/miembro1')}>Benjamin</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/registrar-auto')}>
                Adrian
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/registrar-auto')}>
                Julian
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAV;

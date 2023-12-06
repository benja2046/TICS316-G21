import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const NAV = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [randomUser, setRandomUser] = useState(null);

  const searchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setRandomUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  useEffect(() => {
    searchRandomUser();
  }, []);

   const handleSearchClick = () => {
    onSearch(searchTerm); // Llamar a la función de búsqueda con el término actual
    navigate(`/user/${searchTerm}`); // Navegar a la ruta del usuario buscado
  };
  

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="rounded-circle" href="/home">
          <img src={Logo} className="rounded-circle" width="50" height="50" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/perfil')}>Perfil</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/about')}>About</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/publicaciones')}>Publicaciones</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/contact')}>Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
          <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar usuario"
          />
        </InputGroup>
        <Button variant="light" onClick={handleSearchClick}>
          Buscar
        </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NAV;

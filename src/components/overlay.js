import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function Canvas({ name, updateProfile, ...props }) {
 const [show, setShow] = useState(false);
 const [newUsername, setNewUsername] = useState(name);
 const [newBio, setNewBio] = useState('');
 const [newImageUrl, setNewImageUrl] = useState('');

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(newUsername, newBio, newImageUrl);
    setShow(false);
 };
 const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
     const reader = new FileReader();
     reader.onload = (event) => {
       setNewImageUrl(event.target.result);
     };
     reader.readAsDataURL(file);
  }
};

 return (
    <>
      <Button variant="light" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Configuracion</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBio">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Actualizar perfil
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
 );
}

export default Canvas;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './createAcount.css';

function Signup() {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword1, setSignupPassword1] = useState('');
  const [signupPassword2, setSignupPassword2] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Verificar que las contraseñas coincidan
    if (signupPassword1 !== signupPassword2) {
      alert('Las contraseñas no coinciden. Intenta de nuevo.');
      return;
    }

    // Agregar lógica para registrar al usuario (puede ser una llamada a la API, etc.)

    // Redirigir al usuario después de registrarse
    navigate('/publicaciones');
  };

  return (
    <div className="Create">
    <div>
      <div className="Top-logo-image">
        <img
          className="Home_Imagebrand"
          src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
          alt="rawcreate"
        />
      </div>
      <div className="login-container">
        <h2>Crear Cuenta</h2>
        <form className="login-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={signupPassword1}
            onChange={(e) => setSignupPassword1(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            required
            value={signupPassword2}
            onChange={(e) => setSignupPassword2(e.target.value)}
          />
          <button type="submit">Crear Cuenta</button>
        </form>
        <div className='extra-login-buttons'>
          <Link className="create-account" to="/">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </Link>
          <Link className="forgot-password" to="/olvide-contraseña">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;

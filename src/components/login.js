import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFakeLogin = (e) => {
    e.preventDefault();
  
    // Verificar las credenciales
    if (email === 'pepito@gmail.com' && password === '123456') {
      // Redirigir solo si las credenciales son correctas
      navigate('/publicaciones');
    } else {
      alert('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="Login">
      <div>
        <div className='Top-logo-image'>
          <img
            className="Home_Imagebrand"
            src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
            alt="rawcreate"
            height="70"
            width="auto"
          />
        </div>
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form className="login-form" onSubmit={handleFakeLogin}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <div className='extra-login-buttons'>
            <Link className="forgot-password" to="/olvide-contraseña">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link className="create-account" to="/crear-cuenta">
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

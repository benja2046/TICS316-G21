import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotAcount.css';

function ForgotPassword() {
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleRecovery = (e) => {
    e.preventDefault();

    // Agregar lógica para enviar un correo de recuperación (puede ser una llamada a la API, etc.)
    
    // Alerta temporal para simular el proceso
    alert(`Se ha enviado un correo de recuperación a ${recoveryEmail}`);
  };

  return (
    <div className="ForgotPassword">
        <div>
      <div className="Top-logo-image">
        <img
          className="Home_Imagebrand"
          src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
          alt="rawcreate"
        />
      </div>
      <div className="login-container">
        <h2>Recuperar Contraseña</h2>
        <form className="login-form" onSubmit={handleRecovery}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            required
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
          />
          <button type="submit">Recuperar Contraseña</button>
        </form>
        <div className='extra-login-buttons'>
          <Link className="create-account" to="/">
          ¡Inicia sesión aquí!
          </Link>
          <Link className="forgot-password" to="/crear-cuenta">
          ¡Crea una cuenta aquí!
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
import React from 'react';
import './login.css';



function Login() {

    return (
        <div className="Login">
            <div>
                <div className='Top-logo-image'>
                    <img
                        className="Home_Imagebrand"
                        src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
                        alt="rawcreate"
                        height="70"
                        width="auto" />
                </div>
                <div class="login-container">
                    <h2>Iniciar Sesión</h2>
                    <form class="login-form">
                        <input type="email" placeholder="Correo Electrónico" required />
                        <input type="password" placeholder="Contraseña" required />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <div className='extra-login-buttons'>
                        <a class="forgot-password" href="#">¿Olvidaste tu contraseña?</a>
                        <a class="create-account" href="#">Crear cuenta</a>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default Login;
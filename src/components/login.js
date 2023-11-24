import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './login.css';
import Avatar from '@mui/material/Avatar';



function Login() {

    return (
        <div className="Login">
            <img
                className="Home_Imagebrand"
                src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
                alt="rawcreate"
                height="40"
                width="auto"/>
            <div class="login-container">
            <h2>Iniciar Sesión</h2>
            <form class="login-form">
            <input type="email" placeholder="Correo Electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
            </form>
            <a class="forgot-password" href="#">¿Olvidaste tu contraseña?</a>
            <a class="create-account" href="#">Crear cuenta</a>

            </div>
            
            

            
        </div>
    );
}

export default Login;
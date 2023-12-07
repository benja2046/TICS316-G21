import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom"
import Avatar from '@mui/material/Avatar';

const Footer = () => {
    return (
        <div class="footer-basic">
        <footer>

            <div className="list-inline">
                <ul>
                    <Link to="/home"><li class="list-inline-item"><a href="#">Inicio</a></li></Link>
                    <Link to="/contact"><li class="list-inline-item"><a href="#">Contactos</a></li></Link>
                    <Link to="/publicaciones"><li class="list-inline-item"><a href="#">Publicaciones</a></li></Link>
                    <Link to="/"><li class="list-inline-item"><a href="#">Login</a></li></Link>
                    <Link to="/about"><li class="list-inline-item"><a href="#">RawCreate</a></li></Link>
                </ul>
            </div>

            <div className="copyright">
                <p >RawCreate © 2023</p>
            </div>


            <div class="social">
                <h5>Equipo:</h5>
                <a href="https://www.linkedin.com/in/tom%C3%A1s-pantoja-gallinal-97895a234/">
                    <Avatar
                        className='post_avatar'
                        alt="Tomas Pantoja"
                        src="319741640_219558007179500_3440059218991782107_n.jpg"
                        sx={{ width: 40, height: 40 }}
                    />

                </a>
                <a href="https://www.linkedin.com/in/agustin-vargas-ponce-534b7b236/">
                    <Avatar
                        className='post_avatar'
                        alt="Agustin Vargas"
                        src="Agustin.png"
                        sx={{ width: 40, height: 40 }}
                    />

                </a>
                <a href="https://www.linkedin.com/in/benjamin-gonzalez-834771291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Avatar
                        className='post_avatar'
                        alt="Benjamin Gonzalez"
                        src="benjamin.png"
                        sx={{ width: 40, height: 40 }}
                    />

                </a>
            </div>





        </footer>
    </div>
    );
};

export default Footer;
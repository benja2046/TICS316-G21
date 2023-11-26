import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Perfil from './components/perfil';
import Public from './components/Publicaciones';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import ForgotAcount from './components/forgotAcount';
import CreateAcount from './components/createAcount';
import UserProfile from './components/usuarioX';
import { SearchProvider } from './components/SearchProvider';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta para el componente de inicio de sesión */}
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/publicaciones" element={<Public/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/olvide-contraseña' element={<ForgotAcount/>} />
        <Route path='/crear-cuenta' element={<CreateAcount/>} />
        <Route path="/user/:username" element={<UserProfile />} />

        </Routes>
    </Router>
  );
};

export default App;

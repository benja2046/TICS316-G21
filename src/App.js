import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/about';
import Perfil from './components/perfil';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} /> {/* Ruta para el componente de inicio de sesión */}
        <Route path="/miembro1" element={<Perfil/>} />
        </Routes>
    </Router>
  );
};

export default App;

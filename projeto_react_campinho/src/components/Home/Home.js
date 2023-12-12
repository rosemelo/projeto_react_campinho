// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa os estilos específicos para Home

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
      <Link to="/filmes">Ir para Filmes</Link>
    </div>
  );
};

export default Home;

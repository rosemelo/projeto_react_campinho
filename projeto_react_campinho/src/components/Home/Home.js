import React from 'react';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Olá! Bem-vindo à página do projeto!</h1>
      <p>Este é um projeto feito em React, onde eu utilizo conceitos de componentização, rotas com o React Router Dom, faço requisição e consumo de uma API, no desafio proposto pelo curso Programação Web Full Stack do Campinho Digital.</p>
        
      <Footer />

    </div>
  );
};

export default Home;


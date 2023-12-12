import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '1e18110601e24d0348f6ab85f7400806';  

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: API_KEY,
              language: 'en-US',
              page: 1,
            },
          }
        );
        setMovies(response.data.results);

        // Log para verificar a resposta da API
        console.log('Resposta da API:', response.data.results);
      } catch (error) {
        console.error('Erro ao obter filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  // Log para verificar o estado dos filmes
  console.log('Estado dos filmes:', movies);

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;




import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=oEVZR8r2sXImE7LHNy5MsXuIwIPzuFnfYjrTex2B'); // Substitua "SUA_API_KEY" pela sua chave API
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Erro ao buscar dados APOD:', error);
      }
    };

    fetchApodData();
  }, []);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <h2>{apodData.title}</h2>
      <img src={apodData.url} alt={apodData.title} />
      <p>{apodData.explanation}</p>
    </div>
  );
};

export default TaskList;
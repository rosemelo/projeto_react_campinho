// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import AppRouter from './AppRouter';


// ReactDOM.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);

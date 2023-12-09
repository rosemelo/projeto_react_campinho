import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Tarefas from './pages/Tarefas';



const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/Tarefas">Tarefas</Link></li>
          </ul>
        </nav>

        <Route path="/tarefas" component={Tarefas} />
        {/* <Route path="/home">
            <div>
              <h2>Home</h2>
              <p></p>
            </div>
          </Route> */}
      </div>
    </Router>
  )
};


export default App;

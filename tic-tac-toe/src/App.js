import React from 'react';
import Game from './components/Game';
import './App.css';
import Signup from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    < Router >
      < Route exact path="/">
        <Game />
      </Route>
      < Route exact path="/signup">
        <Signup />
      </Route>
      < Route exact path="/login">
        <Login />
      </Route>
    </Router>
    
  );
}

export default App;

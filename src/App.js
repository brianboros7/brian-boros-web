import React from 'react';
import './styles/App.css';
import Header from './components/app/header/Header';
import Home from './pages/landing/Home'; 
import Contact from './pages/contact/Contact'; 
import Footer from './components/app/footer/Footer';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route
          path="/" exact>
            <Home /> 
        </Route>
        <Route
          path="/contact">
              <Contact /> 
        </Route>
      </Switch>
      <Footer /> 
    </Router>
  );
}

export default App;

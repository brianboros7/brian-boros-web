import React from 'react';
import './styles/App.scss';
import Header from './components/app/header/Header';
import Home from './pages/landing/Home'; 
import Portfolio from './pages/portfolio/Portfolio'; 
import Footer from './components/app/footer/Footer';
import Contact from './pages/contact/Contact'; 

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">  
      <Router>
        <Header /> 
        <Switch>
          <Route
            path="/" exact>
              <Home /> 
          </Route>
          <Route
            path="/portfolio">
                <Portfolio /> 
          </Route>           
          <Route
            path="/contact">
              <Contact /> 
          </Route>
        </Switch>
        <Footer /> 
      </Router>
    </div> 
  )
}

export default App

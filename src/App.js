import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Car from './components/car/car'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div >  
                <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a className="navbar-brand">Car sales</a>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/createVehicle'>Add car</Link>
                      </li>
                    </ul>
                  </nav>
                
                <div className="container-fluid" >
                    <Route path='/' exact component={Home}/>
                    <Route path='/createVehicle' exact component={Car}/>
                </div>
                </Router>
                
            </div> 
     
    </div>
  );
}

export default App;

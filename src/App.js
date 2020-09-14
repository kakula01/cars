import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Car from './components/car/car'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
                <h1>Car sales</h1>
                <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link to='/'>Home</Link>
                    <Link to='/createVehicle'>Add car</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className="container" style={{marginTop:"30px"}}>
                    <Route path='/' exact component={Home}/>
                    <Route path='/createVehicle' exact component={Car}/>
                </div>
                </Router>
                
            </div> 
     
    </div>
  );
}

export default App;

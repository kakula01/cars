import axios from 'axios'
import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Car from '../car/car'

class Home extends React.Component{
   state = {
       carData : null
   }  
    componentDidMount() {
        axios.get('http://localhost:50630/api/car')
            .then(res=>{
                console.log(res);
                this.setState({carData:res.data})
            })
            .catch(error=>{
                console.log(error)
            })

    }
    render(){
        //let renderCar = <table className ='table table-bordered table-hover'><thead className="thead-dark"><tr><th scope="col">Vehicle type</th><th scope="col">Engine</th><th scope="col">Doors</th><th scope="col">Wheels</th><th scope="col">Body type</th><th scope="col">Make</th><th scope="col">Model</th></tr></thead></table>
        let renderCar = null;
        if(this.state.carData) {
            this.state.carData.map(car=>{
                return renderCar = <tr>
                                    <td>{car.vehicleType}</td>
                                    <td>{car.engine}</td>
                                    <td>{car.doors}</td>
                                    <td>{car.wheels}</td>
                                    <td>{car.bodyType}</td>
                                    <td>{car.make}</td>
                                    <td>{car.model}</td>
                                    </tr>
            })
        }
        
    return(
        <div>
           <div className="container-fluid">
                <h1>Car sales</h1>
                <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                   
                    {/* <a className="navbar-brand" href="/">Home</a> */}
                    <Link to='/'>Home</Link>
                    <Link to='/car'>Add car</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    
                     
                </nav>
                <div className="container" style={{marginTop:"30px"}}>
                    <Route path='/car' component={Car}/>
                    <table className ='table table-bordered table-hover'>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Vehicle type</th>
                                <th scope="col">Engine</th>
                                <th scope="col">Doors</th>
                                <th scope="col">Wheels</th>
                                <th scope="col">Body type</th>
                                <th scope="col">Make</th>
                                <th scope="col">Model</th>
                                </tr></thead>
                                <tbody>
                                    {renderCar}
                                </tbody>
                                </table>
                </div>
                </Router>
                
            </div>   
        </div>
    )
    }
}

export default Home
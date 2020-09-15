import React from 'react'
import Vehicle from '../DisplayVehicle/vehicle'
import { listOfvehicles } from '../../sharedData/sharedData'
import { Link} from 'react-router-dom'

class Home extends React.Component{
   state = {
       carData :[]
   }  
    componentDidMount() {
            this.setState({carData:listOfvehicles})

    }
    render(){
    return(
        <div className="row">
            {
                this.state.carData.length ? 
                this.state.carData.map((vehicle,index) => {
                    return  (
                        <div className="mt-4 col-md-4 pl-2" key={index}>
                           <Vehicle  vehicleDetails = {vehicle}></Vehicle>
                       </div>
                   )
                }) :
                <div className="card mx-auto mt-5" style={{width:'400px'}}>
                    <div className="card-body d-flex  mx-auto">
                        <div className='mt-2 '>There is no cars please</div>
                        <Link className="nav-link mr-0 pr-0" to='/createVehicle'>add!</Link>
                    </div>
                </div>
            }
             
        </div>
    )
    }
}

export default Home
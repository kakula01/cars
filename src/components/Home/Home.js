import axios from 'axios'
import React from 'react'
import Vehicle from '../DisplayVehicle/vehicle'

class Home extends React.Component{
   state = {
       carData : [{
           vachickeType : 'car',
           engine : "somthing",
           doors : 4,
           wheels : 4,
           bodyType : "royal",
           make : "make",
           model : 2020
       },{
        vachickeType : 'car',
        engine : "somthing",
        doors : 4,
        wheels : 4,
        bodyType : "royal",
        make : "make",
        model : 2020
    },{
        vachickeType : 'car',
        engine : "somthing",
        doors : 4,
        wheels : 4,
        bodyType : "royal",
        make : "make",
        model : 2020
    },{
        vachickeType : 'car',
        engine : "somthing",
        doors : 4,
        wheels : 4,
        bodyType : "royal",
        make : "make",
        model : 2020
    }]
   }  
    // componentDidMount() {
    //     axios.get('http://localhost:50630/api/car')
    //         .then(res=>{
    //             console.log(res);
    //             this.setState({carData:res.data})
    //         })
    //         .catch(error=>{
    //             console.log(error)
    //         })

    // }
    render(){
        //let renderCar = <table className ='table table-bordered table-hover'><thead className="thead-dark"><tr><th scope="col">Vehicle type</th><th scope="col">Engine</th><th scope="col">Doors</th><th scope="col">Wheels</th><th scope="col">Body type</th><th scope="col">Make</th><th scope="col">Model</th></tr></thead></table>
        // let renderCar = null;
        // if(this.state.carData) {
        //     this.state.carData.map(car=>{
        //         return renderCar = <tr>
        //                                 <td>{car.vehicleType}</td>
        //                                 <td>{car.engine}</td>
        //                                 <td>{car.doors}</td>
        //                                 <td>{car.wheels}</td>
        //                                 <td>{car.bodyType}</td>
        //                                 <td>{car.make}</td>
        //                                 <td>{car.model}</td>
        //                             </tr>
        //     })
        // }
        
    return(
        <div className="row">
             {this.state.carData.map((vehicle,index) => {
                 return  (
                     <div className=" col-md-4 pl-2" key={index}>
                        <Vehicle  vehcleDetails = {vehicle}></Vehicle>
                    </div>
                )
             })}
        </div>
    )
    }
}

export default Home
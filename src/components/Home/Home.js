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
    return(
        <div className="row">
             {this.state.carData.map((vehicle,index) => {
                 return  (
                     <div className="mt-4 col-md-4 pl-2" key={index}>
                        <Vehicle  vehcleDetails = {vehicle}></Vehicle>
                    </div>
                )
             })}
        </div>
    )
    }
}

export default Home
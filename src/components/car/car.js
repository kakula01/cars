import  React from 'react'
import axios from 'axios'


class  car extends React.Component{
    state={
        vehileType:null,
        engine:null,
        doors:null,
        wheels:null,
        make:null,
        model:null,
        bodyType:null,
        errors:{
            vehileType:'',
            engine:'',
            doors:'',
            wheels:'',
            make:'',
            model:'',
            bodyType:'',

        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'vehicleType': 
            this.state.vehicleType = value;
              errors.vehicleType = 
                value.length < 5
                  ? 'vehicle Name must be 5 characters long!'
                  : '';
              break;
            case 'engine': 
            this.state.engine = value;
              errors.engine = 
              value < 4
              ? 'Password must be 8 characters long!'
              : '';
              break;
            case 'doors': 
            this.state.doors = value;
              errors.doors = 
                value < 4
                ? 'Password must be 8 characters long!'
                : '';
            break;
            case 'wheels': 
            this.state.wheels = value;
              errors.wheels = 
                value< 4
                ? 'Password must be 8 characters long!'
                : '';
            break;
            case 'make': 
            this.state.make = value;
              errors.make = 
                value.length < 4
                ? 'Password must be 8 characters long!'
                : '';
            break;
            case 'model': 
            this.setState({model:value});
              errors.model = 
                value.length < 4
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value});
      }

     
      
    submitCarDetails = ()=>{  
        let postData = {
            vehileType:this.setState.vehicleType,
            engine:this.setState.engine,
            doors:this.setState.doors,
            wheels:this.setState.wheels,
            make:this.setState.make,
            model:this.setState.model,
            bodyType:this.setState.bodyType,
        }
    
         axios.post('http://localhost:50630/api/car', postData)

    }
    render(){
    return (
        <div style={{width:'70%', margin:"auto"}}>
            <form>
                <div className="form-group">
                    <label>vehicle type</label>
                     <input type="text" className="form-control" id="vehicleType" placeholder="vehicle type" onChange={(e)=>this.handleChange(e, "vehicleType")}/>
                    
                 </div>
                 <div className="form-group">
                     <label>Engine</label>
                    <input type="text" className="form-control" id="engine" placeholder="engine" onChange={(e)=>this.handleChange(e, "engine")}/>
                </div>
                <div className="form-group">
                     <label>Doors</label>
                    <input type="text" className="form-control" id="doors" placeholder="doors" onChange={(e)=>this.handleChange(e, "doors")}/>
                </div>
                <div className="form-group">
                     <label>Wheels</label>
                    <input type="text" className="form-control" id="wheels" placeholder="wheels" onChange={(e)=>this.handleChange(e, "wheels")}/>
                </div>
                <div className="form-group">
                     <label>Make</label>
                    <input type="text" className="form-control" id="make" placeholder="make" onChange={(e)=>this.handleChange(e, "make")}/>
                </div>
                <div className="form-group">
                     <label>Model</label>
                    <input type="text" className="form-control" id="model" placeholder="model" onChange={(e)=>this.handleChange(e, "model")}/>
                </div>
                
                    <button type="submit" className="btn btn-primary" onClick={this.submitCarDetails}>Submit</button>
            </form>
        </div>
    )
    }
}

export default car
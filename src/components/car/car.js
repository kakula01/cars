import  React from 'react'
import axios from 'axios'


class  car extends React.Component{
    state={
        vehicleType:null,
        engine:null,
        doors:null,
        wheels:null,
        make:null,
        model:null,
        bodyType:null,
        errors:{
            vehicleType:'',
            engine:'',
            doors:'',
            wheels:'',
            make:'',
            model:'',
            bodyType:'',

        }
    }
    validationCheck = (value) => {
      return value.length === 0 ? 'Required!!' : '';
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'vehicleType': 
            this.state.vehicleType = value;
              errors.vehicleType = this.validationCheck(value)
              break;
            case 'engine': 
            this.state.engine = value;
              errors.engine = this.validationCheck(value)
              break;
            case 'doors': 
            this.state.doors = value;
              errors.doors = this.validationCheck(value)
            break;
            case 'wheels': 
            this.state.wheels = value;
              errors.wheels = this.validationCheck(value)
            break;
            case 'make': 
            this.state.make = value;
              errors.make = this.validationCheck(value)
            break;
            case 'model': 
            this.setState({model:value});
              errors.model = this.validationCheck(value)
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      }

     
      
    submitCarDetails = ()=>{  
        let postData = {
            vehicleType:this.setState.vehicleType,
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
      const {errors} = this.state;
    return (
        <div style={{width:'70%', margin:"auto"}}>
            <form onSubmit={this.submitCarDetails} noValidate>
                <div className="form-group">
                    <label>vehicle type</label>
                     <input type="text" name='vehicleType' className="form-control" id="vehicleType" placeholder="vehicle type" onChange={(e)=>this.handleChange(e, "vehicleType")}/>
                     {errors.vehicleType.length > 0 && 
                <span  style={{color:'red'}}>{errors.vehicleType}</span>}
                 </div>
                 <div className="form-group">
                     <label>Engine</label>
                    <input type="text" name="engine" className="form-control" id="engine" placeholder="engine" onChange={(e)=>this.handleChange(e, "engine")}/>
                    {errors.engine.length > 0 && 
                <span style={{color:'red'}}>{errors.engine}</span>}
                </div>
                <div className="form-group">
                     <label>Doors</label>
                    <input type="text" name="doors" className="form-control" id="doors" placeholder="doors" onChange={(e)=>this.handleChange(e, "doors")}/>
                    {errors.doors.length > 0 && 
                <span style={{color:'red'}}>{errors.doors}</span>}
                </div>
                <div className="form-group">
                     <label>Wheels</label>
                    <input type="text" name="wheels" className="form-control" id="wheels" placeholder="wheels" onChange={(e)=>this.handleChange(e, "wheels")}/>
                    {errors.wheels.length > 0 && 
                <span style={{color:'red'}}>{errors.wheels}</span>}
                </div>
                <div className="form-group">
                     <label>Make</label>
                    <input type="text" name="make" className="form-control" id="make" placeholder="make" onChange={(e)=>this.handleChange(e, "make")}/>
                    {errors.make.length > 0 && 
                <span style={{color:'red'}}>{errors.make}</span>}
                </div>
                <div className="form-group">
                     <label>Model</label>
                    <input type="text" name="model" className="form-control" id="model" placeholder="model" onChange={(e)=>this.handleChange(e, "model")}/>
                    {errors.model.length > 0 && 
                <span style={{color:'red'}}>{errors.model}</span>}
                </div>
                
                    <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
    }
}

export default car
import  React from 'react'
import { listOfvehicles } from '../../sharedData/sharedData'

class  car extends React.Component{
  //  history = useHistory();
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
        },
        missingField : ''
    }
    
    validationCheck = (value,type) => {
      if(type === 'Doors' || type === 'Wheels'){
       return !value.match(/\d+/) ? 'Only numbers accepted' : ''
      }
      return value.length === 0 ? `Required ${type}!`  : '';
    }
    validations = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'vehicleType': 
            this.setState({vehicleType:value});
              errors.vehicleType = this.validationCheck(value,'Vehicle Type')
              break;
            case 'engine': 
            this.setState({engine:value});
              errors.engine = this.validationCheck(value, 'Engine')
              break;
            case 'doors': 
            this.setState({doors:value});
              errors.doors = this.validationCheck(value,'Doors')
            break;
            case 'wheels': 
            this.setState({wheels:value});
              errors.wheels = this.validationCheck(value,'Wheels')
            break;
            case 'make': 
            this.setState({make:value});
              errors.make = this.validationCheck(value,'Make')
            break;
            case 'bodyType': 
            this.setState({bodyType:value});
              errors.bodyType = this.validationCheck(value,'bodyType')
            break;
            case 'model': 
            this.setState({model:value});
              errors.model = this.validationCheck(value,'Model')
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      }
    submitCarDetails = (e)=>{ 
      e.preventDefault()
      if(this.state.vehicleType && this.state.engine && this.state.model && this.state.doors && this.state.wheels && this.state.bodyType ){
        let carDetails = {
          vehicleType:this.state.vehicleType,
          engine:this.state.engine,
          doors:this.state.doors,
          wheels:this.state.wheels,
          make:this.state.make,
          model:this.state.model,
          bodyType:this.state.bodyType,
      }
      
      this.setState({missingField : ''})
      listOfvehicles.push(carDetails)
      this.props.history.push('/');
      }else {
        this.setState({missingField : 'Please fill all the fields'})
      }
    }
    render(){
      const {errors} = this.state;
    return (
        <div className="w-50 mt-3 container">
            <form onSubmit={this.submitCarDetails} noValidate>
                <div className="form-group">
                    <label  className="float-md-left "><strong>vehicle type</strong></label>
                     <input type="text" name='vehicleType' className="form-control" id="vehicleType"  onChange={(e)=>this.validations(e, "vehicleType")}/>
                     {errors.vehicleType.length > 0 && 
                <span  style={{color:'red'}}>{errors.vehicleType}</span>}
                 </div>
                 <div className="form-group">
                     <label className="float-md-left "><strong>Engine</strong></label>
                    <input type="text" name="engine" className="form-control" id="engine"  onChange={(e)=>this.validations(e, "engine")}/>
                    {errors.engine.length > 0 && 
                <span style={{color:'red'}}>{errors.engine}</span>}
                </div>
                <div className="form-group">
                     <label className="float-md-left "><strong>Body Type</strong></label>
                    <input type="text" name="bodyType" className="form-control" id="engine"  onChange={(e)=>this.validations(e, "bodyType")}/>
                    {errors.bodyType.length > 0 && 
                <span style={{color:'red'}}>{errors.bodyType}</span>}
                </div>
                <div className="form-group">
                     <label className="float-md-left "><strong>Doors</strong></label>
                    <input type="text" name="doors" className="form-control" id="doors"  onChange={(e)=>this.validations(e, "doors")}/>
                    {errors.doors.length > 0 && 
                <span style={{color:'red'}}>{errors.doors}</span>}
                </div>
                <div className="form-group">
                     <label className="float-md-left "> <strong>Wheels </strong></label>
                    <input type="text" name="wheels" className="form-control" id="wheels"  onChange={(e)=>this.validations(e, "wheels")}/>
                    {errors.wheels.length > 0 && 
                <span style={{color:'red'}}>{errors.wheels}</span>}
                </div>
                <div className="form-group">
                     <label className="float-md-left "> <strong>Make</strong> </label>
                    <input type="text" name="make" className="form-control" id="make"  onChange={(e)=>this.validations(e, "make")}/>
                    {errors.make.length > 0 && 
                <span style={{color:'red'}}>{errors.make}</span>}
                </div>
                <div className="form-group">
                     <label className="float-md-left "><strong>Model</strong></label>
                    <input type="text" name="model" className="form-control" id="model"  onChange={(e)=>this.validations(e, "model")}/>
                    {errors.model.length > 0 && 
                <span style={{color:'red'}}>{errors.model}</span>}
                </div>
                {this.state.missingField.length > 0 && 
                <span  style={{color:'red'}}>{this.state.missingField}</span>}
                    <button type="submit" className="btn btn-primary float-md-right" >Create Vehicle</button>
            </form>
        </div>
    )
    }
}

export default car
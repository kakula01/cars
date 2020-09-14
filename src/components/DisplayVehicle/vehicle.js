import React from 'react';
const vehicle = ({vehcleDetails}) => {
   return (
    <div className="card " style={{width:'400px'}}>
        <img className="card-img-top" src={ require('../../assets/images/car.png') }   style={{width:'100%',height:'200px'}} />
        <div className="card-body ">
            <div className="row">
                <div className="col-md-6">
                    somthing :
                </div>
                <div className="col-md-6">
                    value
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    somthing :
                </div>
                <div className="col-md-6">
                    value
                </div>
            </div>
        </div>
    </div>
   );
}
export default vehicle;
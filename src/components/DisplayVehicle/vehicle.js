import React from 'react';
const vehicle = ({vehcleDetails}) => {
   return (
    <div className="card " >
        {/* <img className="card-img-top" src={ require('../../assets/images/car.png') }   style={{width:'100%',height:'200px'}} /> */}
        <img className="card-img-top" src="https://picsum.photos/510/300?random?grayscale"  style={{width:'100%',height:'200px'}} />

        <div className="card-body ">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                    <strong>vachicke Type : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.vachickeType}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start" >
                <strong> Doors : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.doors}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong> Wheels : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.wheels}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong>  Body Type : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.bodyType}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong> Make : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.make}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong>  Model : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehcleDetails.model}
                </div>
            </div>
        </div>
    </div>
   );
}
export default vehicle;
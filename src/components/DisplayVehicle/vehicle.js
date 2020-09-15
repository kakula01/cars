import React from 'react';
const vehicle = ({vehicleDetails}) => {
   return (
    <div className="card " >
        <img className="card-img-top" src={ require('../../assets/images/car.png') }   style={{width:'100%',height:'200px'}} />
        <div className="card-body ">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                    <strong>vehicle Type : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.vehicleType}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                    <strong>Engine : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.engine}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start" >
                <strong> Doors : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.doors}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong> Wheels : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.wheels}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong>  Body Type : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.bodyType}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong> Make : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.make}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <strong>  Model : </strong>
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {vehicleDetails.model}
                </div>
            </div>
        </div>
    </div>
   );
}
export default vehicle;
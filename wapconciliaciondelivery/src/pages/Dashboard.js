import React, { Component } from "react";
// import mercadoPago from './../images/general/mercadoPago.png';
// import openpay from './../images/general/openpay.png';
// import wow from './../images/general/wow.png';
import rappi from './../images/general/rappi.png';




function Dashboard() {

  return (
   
<div className="container-fluid">
<div className="row">
  <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
  <div className="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-10">
   <div className="row mt-4">
    
    <div className="card-container">
    <div className="card-select card-animate card-color-style">
    {/* <img src={mercadoPago} /> */}
    <div>
    <label>Fecha inicial</label>
    <input className="form-control mb-2"  type="date" />
    <label>Fecha final</label>
    <input className="form-control mb-2"  type="date" />
    <button type="button" class="btn btn-primary w-100 mb-3 mt-2">Generar reporte </button>

    </div>
    </div>
    </div>

    <div className="card-container">
    <div className="card-select card-animate card-color-style">
    {/* <img src={wow} /> */}
    <div>
    <label>Fecha inicial</label>
    <input className="form-control mb-2"  type="date" />
    <label>Fecha final</label>
    <input className="form-control mb-2"  type="date" />

    <button type="button" class="btn btn-primary w-100 mb-3 mt-2">Generar reporte></button>

    </div>
    </div>
    </div>

    <div className="card-container">
    <div className="card-select card-animate card-color-style">
    {/* <img src={openpay} /> */}
    <div>
    <label>Fecha inicial</label>
    <input className="form-control mb-2"  type="date" />
    <label>Fecha final</label>
    <input className="form-control mb-2"  type="date" />

    <button type="button" class="btn btn-primary w-100 mb-3 mt-2">Generar reporte></button>

    </div>
    </div>
    </div>

    <div className="card-container">
    <div className="card-select card-animate card-color-style">
    {/* <img src={rappi} /> */}
    <div>
    <label>Fecha inicial</label>
    <input className="form-control mb-2"  type="date" />
    <label>Fecha final</label>
    <input className="form-control mb-2"  type="date" />

    <button type="button" class="btn btn-primary w-100 mb-3 mt-2">Generar reporte </button>

    </div>
    </div>
    </div>

    

  
   




   </div>

  </div>
  <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
</div> 
    </div>

   
  );
}


export default Dashboard;
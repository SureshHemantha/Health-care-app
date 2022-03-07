import React, { Component } from 'react'
import './Surgery_home.css'

export default class Surgery_home extends Component {
    render() {
        return ( 
            <div className="Surgery">
            
        
          <div className="wrapper" style={{ display: "flex" }}>
                

                <button className="button" style={{ marginLeft: "auto" }} ><a href="/View_Booking"   style={{ textDecoration: 'none' }} >
                    View Booking</a>
                </button>
            </div>
            <h1 className="text-center display-1">Welcome To The Surgery Section</h1>
          <br/>
          <br/>
          <br/>
          <br/>
        
      
         
          
        

           
            <div className="container" style={{width:'50%'}}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">

                                <img src="images/1.png" className="card-img-top" alt="image1" />
                                <div className="card-body">
                                    <h5 className="card-title">Patient Report</h5>
                                    <p className="card-text"></p>
                                    <a href="/Patient_Report" style={{ textDecoration: 'none', color: 'white' }} className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <img src="/images/2.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Surgery Details</h5>
                                    <p className="card-text"></p>
                                    <a href="/Surgery_Details" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <img src="/images/3.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Booking</h5>
                                    <p className="card-text"></p>
                                    <a href="/New_Booking" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>


              
            </div >
                    </div>
                </div>
              
             








            
        )
    }
}

import React, { Component } from 'react'
import './New_Booking.css'
import axios from 'axios';

export default class New_Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "",
            name: "",
            nic: "",
            email: "",
            phone: "",
        
         
        };
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            gender: this.state.gender,
            name: this.state.name,
            nic: this.state.nic,
            email: this.state.email,
            phone: this.state.phone,
        
          
        }

        
        console.log("Data sent ", data);

        axios
            .post("/Booking/save", data)
            .then((res) => console.log(res.data));

           

        this.setState({
            gender: "",
            name: "",
            nic: "",
            email: "",
            phone: "",
         
         
        });
    };

    reset() {
    }

  
    render() {
        return (
            <div>
              
                <div className="Head">
                    <h2>New Booking</h2>
                </div>
                <div className="FContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" name="_id" />
                        <div className="form-group Data">
                            <div>
                                <label>Gender</label>
                                <select className="form-control Dropdown" name="gender" placeholder="Choose gender" required value={this.state.gender} onChange={this.handleChange}>
                                    <option>Choose Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                   
                                </select>
                            </div>
                        </div>
                        <div className="form-group Data">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div>
                                <input type="text" className="form-control Text" name="name" placeholder="Enter Name" required value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group Data">
                            <label className="col-sm-2 col-form-label">National Id</label>
                            <div>
                                <input type="text" className="form-control Text" name="nic" placeholder="Enter NIC" pattern="[0-9]{3}[0-9]{3}[0-9]{3}{1}[v/V] || [0-9]{4}[0-9]{4}[0-9]{4}" value={this.state.nic} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group Data">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div>
                                <input type="email" className="form-control Text" name="email" placeholder="Enter Email" required value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group Data">
                            <label className="col-sm-2 col-form-label">Phone No</label>
                            <div>
                                <input type="text" className="form-control Text" name="phone" placeholder="Enter Phone No" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                        </div>
                     
                       
                        <div className="form-group Data">
                            <div>
                        
                           <button type="submit" className="Button">Book Now</button>
                          
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

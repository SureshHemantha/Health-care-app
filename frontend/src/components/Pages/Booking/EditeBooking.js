import React, { Component } from 'react';
import axios from 'axios';

export default class EditeBooking extends Component {

    constructor(props){
        super(props);
        this.state={
            gender:"",
            name:"",
            nic:"",
            email:"",
            phone:"",
          
        }
    }

    handleInputChange= (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        });
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const id = this.props.match.params.id;

        const {gender,name,nic,email,phone} = this.state;

        const data ={
            gender:gender,
            name:name,
            nic:nic,
            email:email,
            phone:phone,
           
        }
        console.log(data)

        axios.put(`/bookings/update/${id}`,data).then((res) =>{
            if(res.data.success){
               alert("Booking Updated Successfully") 
                this.setState(
                    {
                        gender:"",
                        name:"",
                        nic:"",
                        email:"",
                        phone:"",
                      
                        
                    }
                )
            }
        });
    }

    componentDidMount(){

        const id = this.props.match.params.id;
        axios.get(`/booking/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    gender:res.data.booking.gender,
                    name:res.data.booking.name,
                    nic:res.data.booking.nic,
                    email:res.data.booking.email,
                    phone:res.data.booking.phone,
                   
                });

                console.log(this.state.booking);
            }
        });
    }
    render() {
        return (
            <><h4><a href="/" style={{ textDecoration: 'none' }}>All Booking Details</a></h4><div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Booking Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Gender</label>
                        <input type="text"
                            className="form-control"
                            name="gender"
                            placeholder="Enter Gender"
                            value={this.state.gender}
                            onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>National ID</label>
                        <input type="text"
                            className="form-control"
                            name="nic"
                            placeholder="Enter NIC"
                            value={this.state.nic}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Phone</label>
                        <input type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Enter Phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Update
                    </button>


                </form>

            </div></>
        )
    }
}

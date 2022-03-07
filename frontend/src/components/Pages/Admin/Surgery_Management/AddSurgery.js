import React, { Component } from 'react';
import axios from 'axios';

export default class AddSurgery extends Component {

    constructor(props){
        super(props);
        this.state={
            errors: {},
            surgeryName:"",
            description:"",
            price:""
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
        let errors = this.validateAll();
        if (this.isValid(errors)){


        const {surgeryName,description,price} = this.state;

        const data ={
            surgeryName:surgeryName,
            description:description,
            price:price
        }
        console.log(data)

        axios.post("/post/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        surgeryName:"",
                        description:"",
                        price:""
                    }
                )
            } 
        
        });
    }
    else{
        let s1 ={...this.state};
        s1.errors = errors;
        this.setState(s1);
    }
    }
    isValid = (errors) => {
        
        let keys = Object.keys(errors); 
        let count = keys.reduce((acc,curr) => errors[curr] ? acc+1 : acc,0);
        return count === 0;
    };

    validateAll = (e) => {
        let {surgeryName,description,price} = this.state;
        let errors = {};
        errors.surgeryName = this.validatesurgeryName(surgeryName);
        errors.description = this.validatedescription(description);
        errors.price = this.validateprice(price);

        return errors;
    };
    validatesurgeryName = (surgeryName) => 
    !surgeryName 
    ? "surgeryName is Required" 
    : surgeryName.length<5 
    ? "surgeryName should have minimum 5 characters" 
    : "";

    validatedescription = (description) => 
    !description
    ? "description is Required"
    : "";

    validateprice = (price) =>
    !price
    ? "price is Required"
    : "";


    render() {
        let {errors} = this.state;
        return (
            <><h4><a href="/" style={{ textDecoration: 'none' }}>All Surgery Details</a></h4><div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Surgery</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Surgery</label>
                        <input type="text"
                            className="form-control"
                            name="surgeryName"
                            placeholder="Enter Surgery"
                            value={this.state.surgeryName}
                            onChange={this.handleInputChange}  />
                             {errors.surgeryName ? ( <span className="text-danger">{errors.surgeryName}</span>
                            ) : (
                            "")}
                    </div>


                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Description</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter Description"
                            value={this.state.description}
                            onChange={this.handleInputChange} />
                             {errors.description ? ( <span className="text-danger">{errors.description}</span>
                            ) : (
                            "")}
                            
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Price</label>
                        <input type="text"
                            className="form-control"
                            name="price"
                            placeholder="Enter Price"
                            value={this.state.price}
                            onChange={this.handleInputChange} />
                             {errors.price ? ( <span className="text-danger">{errors.price}</span>
                            ) : (
                            "")}
                    </div>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Add
                    </button>


                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div></>
        )
    }
}

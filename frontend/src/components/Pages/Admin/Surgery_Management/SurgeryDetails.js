import React, { Component } from 'react';
import axios from 'axios'

export default class SurgeryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }




    render() {

        const {surgeryName,description,price} =this.state.post;
        return (
            <div style={{margin:'20px'}}>
                <h4>{surgeryName}</h4>
                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">{description}</dd>

                    <dt className="col-sm-3">Price</dt>
                    <dd className="col-sm-9">{price}</dd>
                </dl>
               
            </div>
        )
    }
}

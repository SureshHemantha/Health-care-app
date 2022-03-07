import React, { Component } from 'react';
import './View_Booking.css';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class View_Booking extends Component {


genPDF =() => {
    const doc = new jsPDF()
    doc.setFontSize(20);
    doc.text("Appointment Details", 50,10);
    doc.autoTable({
      html: '#content'
      })
      
      doc.setFontSize(12);
      doc.text("Health Care Channeling - ", 10,272);
      doc.setFontSize(10);
      doc.text(" Appointment Details Report", 52,272);
      doc.save('Appointment Details.pdf');
      
      }

  constructor(props){
    super(props);

    this.state={
      posts:[]
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
      axios.get("/booking").then(res =>{
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });

          console.log(this.state.posts);
        }
      });
  }





onDelete = (id) =>{


  axios.delete(`/booking/delete/${id}`).then((res) =>{
    alert("Cancel Successfully");
    this.retrievePosts();
  })
}


filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.gender.toLowerCase().includes(searchKey) || 
    post.name.toLowerCase().includes(searchKey) ||
    post.nic.toLowerCase().includes(searchKey) ||
    post.email.toLowerCase().includes(searchKey) ||
    post.phone.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea = (e) =>{
 
  const searchKey= e.currentTarget.value;

  axios.get("/booking").then(res =>{
    if(res.data.success){

      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}

  render() {
    return (
      <div style={{width:"100%"}} >
        
      <div className="container" >
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h4><a href="/" style={{textDecoration:'none'}}>All Surgery Details</a></h4>
          </div>
          <div className="col-lg-3 mt-5 mb-5">
            <input
            className="form-control"
            type = "search"
            placeholder="Search"
            name = "searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       
        <table className ="table table-dark table-striped" id="content" style ={{marginTop:'40px'}}>
    
          <thead>
            <tr>
              <th scope="col">SurgeryID</th>
              <th scope="col">Gender</th>
              <th scope="col">Name</th>
              <th scope="col">National ID</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          
          <tbody>
            {this.state.posts.map((posts,index) =>(
             
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>{posts.gender}</td>
                <td>{posts.name}</td>
                <td>{posts.nic}</td>
                <td>{posts.email}</td>
                <td>{posts.phone}</td>
          
                
                <td>

               
                  <a className="btn btn-warning" href={`/EditeBooking/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;

                <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Cancel Booking
                  </a>

             
                  </td>
              </tr>
            ))}
          </tbody>
         
        </table>

     
        <br/>
        <br/>
        <br/>
        <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",
        right:"150px"}}><i href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> Download Appointments Details</i></button>
        &nbsp;&nbsp;&nbsp;&nbsp;
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
      </div>
      <br/>
      </div>
      

      


    )
  }
}


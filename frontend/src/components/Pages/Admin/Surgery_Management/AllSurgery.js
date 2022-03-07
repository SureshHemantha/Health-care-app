import React, { Component } from 'react'
import axios from 'axios';


export default class AllSurgery extends Component {
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
      axios.get("/posts").then(res =>{
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
          });

          console.log(this.state.posts);
        }
      });
  }





onDelete = (id) =>{


  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}


filterData(posts,searchKey){

  const result = posts.filter((post) =>
    post.surgeryName.toLowerCase().includes(searchKey) || 
    post.description.toLowerCase().includes(searchKey) ||
    post.price.toLowerCase().includes(searchKey)
  )
  this.setState({posts:result})
}

handleSearchArea = (e) =>{
 
  const searchKey= e.currentTarget.value;

  axios.get("/posts").then(res =>{
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
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type = "search"
            placeholder="Search"
            name = "searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       
        <table class ="table table-dark table-striped" style ={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Surgery Name</th>
              <th className="col-5" scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
             
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}> 
                    {posts.surgeryName}
                    </a>
                    </td>
                <td>{posts.description}</td>
                <td>{posts.price}</td>
                <td>

                <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;

                <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href ="/add" style={{textDecoration:'none',color:'white'}}>Create New Surgery</a></button>
        
    
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
        <br/>
      </div>
      <br/>
      </div>

      


    )
  }
}


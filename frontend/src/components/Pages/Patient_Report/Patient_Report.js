import React, { Component } from 'react';
import './Patient_Report.css';

export default class Patient_Report extends Component {
  render() {
    return (
      <div className="back1">
      <h4 className="name">Patient Report</h4>
      <form>
      <div class="mb-3">
          <label for="exampleInputName" class="form-label">ID Number</label>
          <input type="name" class="form-control" id="exampleInputName"  />
          
      </div>
      <div class="mb-3">
          <label for="exampleInputPhone" class="form-label">Name</label>
          <input type="Phone" class="form-control"  />
      </div>


      
     
  
 
      <div className="col-auto my-1">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
        <label className="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Check</button>

  </form></div>
          
)
}
}


  


import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import AddSurgery from './components/Pages/Admin/Surgery_Management/AddSurgery';
import EditSurgery from './components/Pages/Admin/Surgery_Management/EditSurgery';
import Home from './components/Common/Home';
import NavBar from './components/Common/NavBar';
import SurgeryDetails from './components/Pages/Admin/Surgery_Management/SurgeryDetails';
import Surgery_home from './components/Pages/Surgery_home/Surgery_home';
import Footer from './components/Common/Footer'
import Patient_Report from './components/Pages/Patient_Report/Patient_Report';
import View_Booking from './components/Pages/Booking/View_Booking';
import New_Booking from './components/Pages/Booking/New_Booking';
import Surgery_Details from './components/Pages/Surgery/Surgery_Details';
import AllSurgery from './components/Pages/Admin/Surgery_Management/AllSurgery';
import EditeBooking from './components/Pages/Booking/EditeBooking';
import AdminHome from './components/Pages/Admin/AdminHome';
import AdminLogin from './components/Pages/Admin/AdminLogin';
import Login from './components/Pages/Admin/Login';
import DoctorLogin from './components/Pages/Admin/DoctorLogin';
import PatientLogin from './components/Pages/Admin/PatientLogin';

export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div >
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={AddSurgery}></Route>
        <Route path="/AllSurgery" component={AllSurgery}></Route>
        <Route path="/edit/:id" component={EditSurgery}></Route>
        <Route path="/post/:id" component={SurgeryDetails}></Route>
        <Route path="/shome" component={Surgery_home}></Route>
        <Route path="/Patient_Report" component={Patient_Report}></Route>
        <Route path="/View_Booking" component={View_Booking}></Route>
        <Route path="/New_Booking" component={New_Booking}></Route>
        <Route path="/Surgery_Details" component={Surgery_Details}></Route>
        <Route path="/EditeBooking" component={EditeBooking}></Route>
        <Route path="/adminhome" component ={AdminHome}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/doctorlogin" component={DoctorLogin}></Route>
        <Route path="/patientlogin" component={PatientLogin}></Route>
        <Route path="/adminlogin" component={AdminLogin}></Route>
        

        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}

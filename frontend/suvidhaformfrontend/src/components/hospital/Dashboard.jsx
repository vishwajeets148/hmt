import React, { useState, useEffect } from 'react'
import  DashboardNav from "./DashboardNav"
import "./Hospital.css"
import axios from 'axios'

const Dashboard = () => {
 const baseurl=process.env.REACT_APP_BASEURL;
 const [data, setData] = useState(null); 
 const id = localStorage.getItem('id');
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    id: '',
    phone: '',
    age: '',
    address: '',
  });
  useEffect(() => {
 
    const storedPatientDetails = JSON.parse(localStorage.getItem('patientDetails'));
    console.log('Stored patient details:', storedPatientDetails); // Debugging statement
    if (storedPatientDetails) {
      setPatientDetails(storedPatientDetails);
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const searchInput = document.querySelector('input[name="searchInput"]');
      const id = searchInput.value;
  
      const response = await axios.get(`${baseurl}/patients/${id}`);
      const patientData = response.data;
  
      console.log('Fetched patient data:', patientData); // Debugging statement
  
      // Update state with patient details
      setPatientDetails(patientData);
  
      // Store patient details in local storage
      localStorage.setItem('patientDetails', JSON.stringify(patientData));
      console.log('Patient details stored in local storage:', patientData); // Debugging statement
  
      // Retrieve patient details from local storage
      const storedPatientDetails = JSON.parse(localStorage.getItem('patientDetails'));
      console.log('Retrieved patient details from local storage:', storedPatientDetails); // Debugging statement
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };
  
  return (
<>
<DashboardNav></DashboardNav>
 <div className="dashboard">

<div className="container-fluid pt-4 px-4 dash">
      <div className="row g-4">
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-line fa-3x text-primary"></i>
            <div className="ms-3">
              <p className="mb-2">Total Patients</p>
              <h6 className="mb-0">1234</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-bar fa-3x text-primary"></i>
            <div className="ms-3">
              <p className="mb-2">Total Doctor</p>
              <h6 className="mb-0">34</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-area fa-3x text-primary"></i>
            <div className="ms-3">
              <p className="mb-2">Today Registration</p>
              <h6 className="mb-0">134</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-pie fa-3x text-primary"></i>
            <div className="ms-3">
              <p className="mb-2">Total Revenue</p>
              <h6 className="mb-0">$1234</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3 Patients">
        <div className="col-md-6 bg-light rounded">
          <h4>Search Patients</h4>
          <hr />
          <form className='form' onSubmit={handleSearch}>
            <div className="row">
              <div className="col-6 mb-3">
                <label htmlFor="" className="form-label">Search Patients </label>
                <input
                  type="text"
                  className="col-3 form-control"
                  placeholder="Enter ID / Phone / Email "
                  id="searchInput"
                  name="searchInput"
                />
              </div>
              <div className="col-3 mt-3">
                <button type="submit" className="btn btn-primary mt-3">Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 bg-light rounded">
          <h4>Patients Details</h4>
          <hr />
          <div className="details">
            <div className="name">
              <p> Name : &nbsp; <b>{patientDetails.name}</b></p>
              <p> Patient ID : &nbsp; <b>{patientDetails.id}</b></p>
              <p> Phone : &nbsp; <b>{patientDetails.phone}</b></p>
            </div>
            <div className="name">
              <p>Age: &nbsp; <b>{patientDetails.age}</b></p>
              <p>Address: &nbsp; <b>{patientDetails.address}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
</>
)}

export default Dashboard
import React, { useEffect, useState } from 'react'
import "./Form.css"
import axios from 'axios';

const FormNavbar = ({ doctor1 }) => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const [doctors, setDoctors] = useState([]);
  // const [selectedDoctor, setSelectedDoctor] = useState('');
  // this function is called when the page reload is complete

  useEffect(() => {
    getdoc();
  }, []);


  // this function is called to get all doctors in the particuler hospital 

  const getdoc = async () => {
    try {
      const id = localStorage.getItem('id');
      const token = localStorage.getItem('token');
      // Make sure ID and token are available
      if (id && token) {
        const response = await axios.get(`${baseurl}/doctor/doctors/hospitals/${id}`);
        setDoctors(response.data);
        // console.log(response.data);
        console.log("call todoctor");
      }
    } catch (error) {
      console.log(error);
    }
  };

// this is the function this will set value of doctor when we select 
  const handleDoctorSelect = (doctorName) => {
    doctor1(doctorName);
    // setSelectedDoctor(doctorName);
    // localStorage.setItem("doctor", JSON.stringify(doctorName))

  }

  return (
    <div className=" bg-body-tertiary">

      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <div className="patient row ">
              <div className="col-md-3 mb-2">
                <button
                  type="button"
                  className="btn btn-secondary modal-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Existing Patient
                </button>
              </div>
              <div className="col-md-3 mb-2">
                <button
                  type="button"
                  className="btn btn-secondary  modal-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  New  Attendant
                </button>
              </div>
              <div className="col-md-3 mb-2">
                <button
                  type="button"
                  className="btn btn-secondary  modal-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Existing Attendant
                </button>
              </div>

              <div className="col-md-3">
                <div className="btn-group ">
                  <button className="btn btn-secondary dropdown-toggle modal-btn doctor-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Doctors
                  </button>
                  <ul className="dropdown-menu">
                    {doctors.map((doctor) => (
                      <li className="dropdown-item" key={doctor.id} value={doctor.name} onClick={() => handleDoctorSelect(doctor.name)}>
                        <b>{doctor.name}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* <div className="col-md-3 m-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#registrationModal"
            >
              New Patient
            </button>
          </div> */}

              {/* <div className="col-md-3 m-2">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle  modal-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Doctor
                </button>
                <ul className="dropdown-menu ">
                  {doctors.map((doctor, index) => (
                    <li key={index} className="dropdown-item" value={doctor.name}>Dr. {doctor.name}</li>
                  ))}
              
                </ul>
               
              </div>
            </div> */}
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default FormNavbar
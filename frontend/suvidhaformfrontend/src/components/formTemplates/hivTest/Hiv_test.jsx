import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import "./HivTest.css";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import AttendantSearch from '../AttendantSearch';
const Hiv_test = (doctor1) => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const [data, setData] = useState({});
  const [state1, setState] = useState('');
  const [city, setCity] = useState('');
  const [id, setid] = useState({ id: "" })
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const handleDoctorSelect = (doctorName) => {
    setSelectedDoctor(doctorName);
    document.getElementById("doc-btn").innerHTML = selectedDoctor;
    document.getElementById("doc-name").innerHTML = selectedDoctor;
  };
  const [hospitaldetails, setHospitaldetails] = useState({
    name: "",
    phone_primary: "",
    phone_secondary: "",
    email: "",
    address: "",
    city_id: "",
    state_id: "",
  });

  const [patientDetails, setPatientDetails] = useState({
    id: 6,
    patient_name: "",
    patient_age: "",
    patient_gender: "",
    patient_phone: "",
    patient_address: "",
    patient_state: "",
    patient_city: "",
    patient_pincode: "",
  });
  //  this us
  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    // Make sure ID and token are available
    if (id && token) {
      const fetchData = async () => {
        try {
          // Make API call with the user ID
          const response = await axios.get(`${baseurl}/hospital/${id}`);
          setData(response.data);
          localStorage.setItem('hospital', JSON.stringify(response.data));
        } catch (error) {
          console.error('API call failed:', error);
        }
      };

      // const getdoc = async () => {
      //   try {
      //     const response = await axios.get(`${baseurl}/doctor/doctors/hospitals/${id}`);
      //     setDoctors(response.data);
      //     console.log(response.data);
      //     console.log("call todoctor");
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };

      // getdoc();
      fetchData();
    } else {
      console.error('ID or token not available in local storage');
    }
  }, []);


  // useEffect(() => {
  //   const id = localStorage.getItem('id');
  //   const token = localStorage.getItem('token');
  //   // Make sure ID and token are available
  //   if (id && token) {
  //     const fetchData = async () => {
  //       try {
  //         // Make API call with the user ID
  //         const response = await axios.get(`${baseurl}/hospital/${id}`);
  //         setData(response.data);
  //         localStorage.setItem('hospital', JSON.stringify(response.data));
  //       } catch (error) {
  //         console.error('API call failed:', error);
  //       }
  //     };
  //     fetchData();
  //   } else {
  //     console.error('ID or token not available in local storage');
  //   }
  // }, []);

  const handlechageDoctor = (data) => {
    console.log(data);
    setDoctors(data);
    // setSelectedDoctor(data);
    // handleDoctorSelect();
  }

  const getLogoSrc = () => {
    if (data && data.hospital && data.hospital.logo) {
      const base64 = btoa(String.fromCharCode.apply(null, data.hospital.logo.data));
      return `data:image/png;base64,${base64}`;
    }
    return null;
  };


  //  attendant details 
  const [attendant, setAttendantData] = useState({
    name: "",
    address: "",
    occupation: "",
    telephone: "",
    relation_with_patient: "",
    patient_id: "",
    signature: "",
  })

  const handlePrint = () => {
    window.print();
  };
  //==========  this useeffect setHospitaldetails when the data is called 
  useEffect(() => {

    if (data && data.hospital) {
      console.log(data.hospital)
      setHospitaldetails(data.hospital);
      state();

    }
  }, [data, patientDetails]);

  const state = async () => {
    const stateId = data.hospital.state_id;
    const cityId = data.hospital.city_id;
    try {
      const state = await axios.get(`${baseurl}/city/getcitiesByState/${stateId}`);
      const cities = await axios.get(`${baseurl}/city/getcity/${cityId}`);
      // console.log(cities.data.city_name);
      setCity(cities.data.city_name);
      setState(state.data[0].state_name);
      //  console.log(state.data[0].state_name);

    } catch (error) {
      console.log(error);
    }
  }

  //==========  this fuction work when we select a patient
  const Select = () => {
    removeAttendant();
    const savedPatientDetails = localStorage.getItem('patientDetails');
    if (savedPatientDetails) {
      const pData = JSON.parse(savedPatientDetails);
      setPatientDetails(pData.patient);
      console.log(pData.patient); // Add this line to check if data is retrieved correctly
    }
  };


  const removePatientData = () => {
    setPatientDetails({
      id: "",
      patient_name: "",
      patient_age: "",
      patient_gender: "",
      patient_phone: "",
      patient_address: "",
      patient_state: "",
      patient_city: "",
      patient_pincode: "",
    });
  }
  // ================ select attendant =================



  const select = async () => {
    removePatientData();
    const savedAttendantDetails = localStorage.getItem('attendant');
    if (savedAttendantDetails) {
      const aData = JSON.parse(savedAttendantDetails);
      setid(aData.id);
    }
    getAttendant();
    // console.log(id);

  }

  const getAttendant = async () => {
    try {
      const attendantId = localStorage.getItem('attendantId');
      const response = await axios.get(`${baseurl}/attendant/${attendantId}`);
      setAttendantData(response.data.attendant);
      console.log(response.data.attendant);

    } catch (error) {
      alert(error.message);
    }

  }

  const removeAttendant = () => {
    setAttendantData({
      name: "",
      address: "",
      occupation: "",
      telephone: "",
      relation_with_patient: "",
      patient_id: "",
      signature: "",
      status: "married"
    })
  }

  return (
    <div>
      <FormNavbar id="navbar" className="navbar" doctor1={handlechageDoctor}>
      </FormNavbar>
      <div className="header container">
        <div className="main-header">
          <div className="row">
            <div className="col-3 text-end align-self-center">
              <div className="logo">
                <img
                  className="logo-img"
                  src={getLogoSrc()}
                  alt="Hospital Logo"
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
            </div>
            <div className="col-9 text-start">
              <b>
                <h1 id="hospitalName" className="m-1">
                  {hospitaldetails.name}
                </h1>
              </b>
              <p id="hospitalAddress">
                <b>
                  {hospitaldetails.address + "( " + hospitaldetails.pincode + " )" +
                    " , " + city + " ," +
                    state1
                  }
                </b>
              </p>
              <p>
                <b>
                  Phone - {hospitaldetails.phone_primary + " ," + hospitaldetails.phone_secondary + ", Email : " + hospitaldetails.email}
                </b>
              </p>
            </div>
            {/* <div className="col-3 select-button-doc">
            <div className="dropdown p-0 m-0">
              <button
                className="btn dropdown-toggle btn-secondary  modal-btn doc-btn p-1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                Select Doctor
              </button>
              <ul className="dropdown-menu ">
                {doctors.map((doctor) => (
                  <li className="dropdown-item" key={doctor.id} value={doctor.name} onClick={() => handleDoctorSelect(doctor.name)}>
                    <b>{doctor.name}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          </div>
          <div className="header">
            <div
              className="modal fade"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <Attendant></Attendant>

            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <Patients >
              </Patients>
              <div className="select p-2  bg-white  container  rounded  " id="select">
                <button className="btn btn-primary " onClick={Select}>Select This Patient</button>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <AttendantSearch></AttendantSearch>
              <div className="select p-2  bg-white  container  rounded  " id="select">
                <button className="btn btn-primary " onClick={getAttendant}>Select This Attendant</button>
              </div>
            </div>

            {/* <div
            class="modal fade"
            id="registrationModal"
            tabIndex="-1"
            aria-labelledby="registrationModalLabel"
            aria-hidden="true"
          >

            <PatientRegister></PatientRegister>
          </div> */}
          </div>
          <hr class="seprator" />
          <div className="container">
            <div class="form-heading">
              <h3>CONSENT FORM FOR HIV TESTING</h3>
            </div>
            <div class="">
              <div class=" text-start mb-4">
                <p>
                  I understand that the test result will part of my confidential medical record.
                  I have been infromed about AIDS(HIV) antibody test see the attached infromation.
                  I had certain question to ask whic have been satisfactorily answered.
                </p>
              </div>
              <div class="row">
                <div class="col-sm-6 text-start">
                  <p> Patient Name : <b>{patientDetails.patient_name}</b></p>
                </div>
                <div class="sex col-sm-6">
                  <p>Age/Sex: <b>{patientDetails.patient_age + " / " + patientDetails.patient_gender}</b> </p>
                </div>
                <div class=" row">
                  <div class="col-sm-6 text-start">
                    <p>Marital Status : {patientDetails.status}</p>
                  </div>
                  <div class="col-sm-6">
                    <p>Referred by : <b>{doctors}</b> </p>
                  </div>
                </div>
                <div class=" text-start mb-3 mt-3">

                  <p>I , hereby , give my consent for the test to be conducted
                    on me in order to ascertain my HIV
                    serostatus
                  </p>

                </div>
                <div class="row">
                  <div class="text-start col">
                    <p>Patient Signature </p>
                  </div>
                  <div class="col">
                    <p>(In case of minor-Parents Signature)</p>
                  </div>
                </div>

                <div class="text-start">
                  <p>
                    (In case of unconscious patient Signature of next of kin)
                  </p>

                </div>
                <div class="row">
                  <div class="col text-start">
                    <p>
                      Specimen :-<b>{attendant.name}</b>
                    </p>
                  </div>
                  <div class="col">
                    <p>Clinical Details :- ...........................................</p>
                  </div>
                </div>
                <div class="text-start mt-4">

                  <p>
                    This is to certify that the consent form has been signed in my presence and patient
                    has been given pre testing counselling and post test counsellingis ensured.
                  </p>

                </div>
                <div class="">
                  <div class="text-start">
                    <p>
                      Doctors Signature
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="btn btn-primary" onClick={handlePrint}>
          Print Form
        </button>
      </div>
    </div>
  );
};

export default Hiv_test;

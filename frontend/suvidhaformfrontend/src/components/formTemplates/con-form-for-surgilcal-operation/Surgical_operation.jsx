import React from 'react'
import { useEffect, useState } from 'react';
import "./Surgicaloperation.css";
import FormNavbar from '../FormNavbar';
import axios from 'axios';
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"
const Surgical_operation = (doctor1) => {

    const baseurl = process.env.REACT_APP_BASEURL;
    const [data, setData] = useState({});
    const [id, setid] = useState({ id: "" })
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [attendantId, setAttendantId] = useState('');
    const [date, setDate] = useState("");
    const [state1, setState] = useState('');
    const [city, setCity] = useState('');



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
    //this use effect call when the page render is finished
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
            getDate();
        } else {
            console.error('ID or token not available in local storage');
        }
    }, []);

    // this is the helper function to  get curent date 
    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const currentDate = date + "/" + month + "/" + year;
        setDate(currentDate);
        console.log(currentDate);
    }

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

    // const handleDoctorSelect = () => {
    //   // console.log(doctorName);
    //  // setSelectedDoctor(doctorName);
    //   document.getElementById("doc-btn").innerHTML = selectedDoctor;
    //   document.getElementById("doc-name").innerHTML = selectedDoctor;
    // };


    // this is the helper function to get src of image 

    const getLogoSrc = () => {
        if (data && data.hospital && data.hospital.logo) {
            const base64 = btoa(String.fromCharCode.apply(null, data.hospital.logo.data));
            return `data:image/png;base64,${base64}`;
        }
        return null;
    };


    //==========  this useeffect setHospitaldetails when the data is called 
    useEffect(() => {

        if (data && data.hospital) {
            console.log(data.hospital)
            setHospitaldetails(data.hospital);
            state();
        }
    }, [data]);

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
        })
    }
    // ============== print form =============================

    const handlePrint = () => {
        window.print();
    };


    //  ==================== Doctor list =================



    const PatientAddress = patientDetails.patient_address + " " + patientDetails.patient_pincode + " " + patientDetails.patient_city;
    const AttendantAddress = attendant.address;
    return (
        <div>
            <FormNavbar id="navbar" className="navbar" doctor1={handlechageDoctor}>
            </FormNavbar>
            <div className="main-header container">
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
                    <div className="col-9 ">
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
                        className="modal fade"
                        id="exampleModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <AttendantSearch></AttendantSearch>
                        <div className="select p-2  bg-white  container  rounded  " id="select">
                            <button className="btn btn-primary " onClick={select}>Select This Attendant</button>
                        </div>
                    </div>

                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <Patients >
                        </Patients>
                        <div className="select p-2  bg-white  container  rounded  " id="select">
                            <button className="btn btn-primary " onClick={Select}>Select This Patient</button>
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
                <div class="form-container">
                    <div class="form-heading">
                        <h5>
                            CONSENT FORM FOR SURGICAL OPERATION AND / OR DIAGNOSTIC /THERAPEUTIC
                            PROCEDURE
                        </h5>
                    </div>
                    <div class=" row">
                        <div class=" col-sm-4">
                            <p>C.R No .................</p>
                        </div>
                        <div class="col-sm-4">
                            <p>UHID NO : .............</p>
                        </div>
                        <div class="col-sm-4">
                            <p>Date : <b>{date}</b></p>
                        </div>
                    </div>
                    <div class="details2">
                        <div class="name">
                            <p>Name : <b>{patientDetails.patient_name}</b></p>
                        </div>
                        <div class="sex">
                            <p>Sex : <b>{patientDetails.patient_gender}</b></p>
                        </div>
                        <div class="age">
                            <p>Age : <b>{patientDetails.patient_age}</b></p>
                        </div>
                    </div>

                    <div class="son">
                        <div class="sonof">
                            <p>S/o, D/o, W/o : ...................</p>
                        </div>
                    </div>
                    <div class="heading">
                        <h6 class="h6">Authorization For Surgical Operation And / or Diagnostic / Therapeutic Procedure
                        </h6>
                    </div>
                    <div class="para">
                        <ol>
                            <li> I hereby authorize the above hospital and its staff to perform upon the above patient the following
                                surgical Operation and/or diagnostic/therapeutic procdure

                            </li>
                            <li>
                                It has been explained to me that, during the course of thr operation / procedure unforeseen
                                condition may be revealed or encountered which necessitate surgical or there emergency procedures in
                                addition to or different for those contemplated at the time to initial diagnosis, I therefore,
                                further authorize above designated staff to perform such additional surgical or other procedures as
                                they deem necessary or desirable.

                            </li>
                            <li>
                                I further consent to the administration of drugs infusions, blood product transfusions or any other
                                treatment or procedure dimmed necessary.

                            </li>
                            <li>
                                The nature and purpose of the operation and/ or procedures, the necessity thereof, the possible
                                alternative methods. treatment, prognosis, the risks involved and the possibility of complication in
                                the investigative procedures/ investigation and treatment of my condition/diagnosis have been fully
                                explained to me and I have understood the same

                            </li>
                            <li>
                                I have been given an opportunity to ask all any questions and I have also been given option to ask
                                for second opinion.


                            </li>
                            <li>
                                I acknowledge that no guarantee and promise has been made to me consuming the result of any
                                procedure/treatment.


                            </li>
                            <li>
                                I consent to the photographing or televising of the operation or procedures to be performed,
                                including appropriate portions of my body, for medical, scientific of educational purpose, provided
                                my identity is not revealed by pictures or by descriptive texts accompanying them.

                            </li>
                            <li>
                                I also give consent to the disposal by hospital authorities of any deceased tissued of parts there
                                of necessary to or removed during the course of operative procedure/treatment.
                            </li>

                        </ol>
                    </div>
                    <div class="certify">
                        <p>CERTIFY THAT THE STATEMENT MADE IN THE ABOVE CONSENT FORM HAS BEEN READ OVER AND EXPLINED TO ME IN MY MOTHER TONGUE AND I HAVE FULLY UNDERSTOOD THE IMPLICATIONS OF THE ABOVE CONSENT.
                        </p>
                    </div>
                    <div class="sign">
                        <div class="witness-name-sign">
                            <p>Name & Signature of the witness</p>
                            <p><b>{attendant.name}</b></p>
                            <p>--------------------------</p>
                        </div>
                        <div class="patients-sign">
                            <p>Signature of the patients /Parent/Gurdian</p>
                            <p>Thumb Impression</p>
                            <p>Name: <b>{attendant.name}</b></p>
                            <p>Relationship With Patients : <b> {attendant.relation_with_patient}</b></p>
                        </div>
                    </div>
                    <div class="cerify1">
                        <p> I CONFIRM THAT I HAVE EXPLANIED THAT NATURE AND EFFECTS OF THE OPERATION/

                            OCEDUE/THREATMENT TO THE PERSON WHO HAS SIGNED THE ABOVE CONSENT FORM
                        </p>
                    </div>
                    <div class="sign-anaes">
                        <p> Signature Of Anaesthetist</p>
                        <p> Name : <b>{doctors}</b></p>
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

export default Surgical_operation;

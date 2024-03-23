
import "./CarePlan.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"
const Care_plan = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [data, setData] = useState({});
    const [id, setid] = useState({ id: "" })
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [attendantId, setAttendantId] = useState('');
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
            <div class=" row">
                <div className="col-sm-8">
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
                        <div className="col-9">
                            <b>
                                <h1 id="hospitalName" className="m-1">
                                    {hospitaldetails.name}
                                </h1>
                            </b>
                            <p id="hospitalAddress">
                                <b>
                                    {hospitaldetails.address + "( " + hospitaldetails.pincode + " )" + " , " + city + " ," + state1}
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

                </div>
                <div class=" col-sm-4">
                    <div class="formboxdetails">
                        <div class="line2">
                            <div class="name">
                                <p> Patient Name : <b>{patientDetails.patient_name}</b></p>
                            </div>
                        </div>
                        <div class="line2">
                            <div class="agesex">
                                <p>Age : <b>{patientDetails.patient_age}</b>.</p>
                            </div>
                            <div class="agesex">
                                <p>Sex : <b>{patientDetails.patient_gender}</b></p>
                            </div>
                        </div>
                        <div class="line2">
                            <div class="bed">
                                <p>Bed No. :......................</p>
                            </div>
                            <div class="bed">
                                <p>IPD No. :.......................</p>
                            </div>
                        </div>
                        <div class="line2">
                            <div class="bed">

                                <p> Consultant :...........................................................</p>
                            </div>
                        </div>
                        <div class="line2">
                            <div class="bed">
                                <p> Reg. No. :..............................................................</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="seprator" />
            <div class="form-container ">
                <div class="form-heading">
                    <h3>CARE PLAN</h3>
                </div>
                <div class="form-details container">
                    <div class="row">
                        <div class="chief col">
                            <p>
                                Status at the Beginning Of The Treatment :................................
                            </p>
                        </div>
                        <div class="line1 col">
                            <div class="provisional">
                                <p>Provisional Diagnosis: ......................................................</p>
                            </div>
                        </div>
                    </div>

                    <div class="Preventative">
                        <p>Preventative Care : Explaind / Educational Learlet <br />
                            (Please Write the Explaind Part in Brief)
                        </p>
                    </div>


                    <div class="signature mt-2">
                        <p>Progress Chart 2 :-</p>
                    </div>

                    <div class="nextsignature">
                        <p class="border">
                            <table>
                                <tr>
                                    <th>Sickness</th>
                                    <th>DAY 1</th>
                                    <th>DAY 2</th>
                                    <th>DAY 3</th>
                                    <th>DAY 4</th>
                                    <th>DAY 5</th>
                                    <th>DAY 6</th>
                                    <th>DAY 7</th>
                                </tr>
                                <tr>
                                    <td>Severe</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Moderate</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Mild</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>WNL</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </p>
                    </div>
                    <div class="line1">
                        <div class="dets">
                            <p>
                                Rehabilitative Remark:
                            </p>
                        </div>
                    </div>
                    <div class="line1">
                        <div class="chief">
                            <p>
                                Anticipated Complications:
                            </p>
                        </div>
                    </div>
                    <div class="line1">
                        <div class="ambulatory">
                            <p>
                                Goals Of Treatment -
                            </p>
                        </div>
                        <div class="ambulatory">
                            <p>
                                Curative  <input type="checkbox"></input>
                            </p>
                        </div>
                        <div class="ambulatory">
                            <p>
                                Preventive  <input type="checkbox"></input>
                            </p>
                        </div>
                        <div class="ambulatory">
                            <p>
                                Rehabilitative  <input type="checkbox"></input>
                            </p>
                        </div>
                    </div>
                    <div class="line1">
                        <div class="chief">
                            <p>
                                Consultations Name & Signature
                            </p>
                        </div>
                    </div>
                    <hr class="seprator" />
                    <div class="line1">
                        <div class="chief">
                            <p>
                                Note : If the Patient Stay is more than 7 days , Please fill the Revised Care Plan.
                            </p>
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

export default Care_plan;

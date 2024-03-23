
import "./Doctorsheet.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"

const Doctor_sheet_ed = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [data, setData] = useState({});
    const [id, setid] = useState({ id: "" })
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [attendantId, setAttendantId] = useState('');
    const [state1, setState] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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
        patient_name: ".....",
        patient_age: "....",
        patient_gender: "..........",
        patient_phone: "...........",
        patient_address: "........",
        patient_state: "........",
        patient_city: ".........",
        patient_pincode: ".........",
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
                    // console.log(response.data);
                    // localStorage.setItem('hospital', JSON.stringify(response.data));

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

    const getDate = () => {
        setInterval(()=>{
            const today = new Date();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const date = today.getDate();
            const currentDate = date + "/" + month + "/" + year;
            setDate(currentDate);
            const time = today.toLocaleTimeString();
            setTime(time);

        },1000)
        // console.log(time)
        // console.log(currentDate);
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
        // console.log(data);
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
            <div class="container">
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

            </div>
            <hr class="seprator" />
            <div class="container">
                <div class="form-heading">
                    <h3>DOCTOR ASSESMENT SHEET-ED</h3>
                </div>
                <div class="form-details">
                    <div class="line1">
                        <div class="name">
                            <p>Name : <b>{patientDetails.patient_name}</b></p>
                        </div>
                        <div class="sex">
                            <p>Age: <b>{patientDetails.patient_age}</b></p>
                        </div>
                        <div class="age">
                            <p>Sex: <b>{patientDetails.patient_gender}</b></p>
                        </div>
                        <div class="age">
                            <p>IPD: <b>.....</b></p>
                        </div>
                        <div class="age">
                            <p>Date: <b>{date}</b></p>
                        </div>
                        <div class="age">
                            <p>Time: <b> {time}</b></p>
                        </div>
                    </div>
                </div>
                <div class="line1">
                    <div class="history">
                        <p>
                            History :
                            ............................................................................
                        </p>
                    </div>
                </div>

                <div class="line1">
                    <div class="presentingcomplaint">
                        <p>
                            Presenting Complaint :
                            ............................................................................
                        </p>
                    </div>
                </div>
                <div class="line1">
                    <div class="generalphysical">
                        <p>
                            General Physical Examination :
                            ............................................................................
                        </p>
                    </div>
                </div>
                <div class="line1">
                    <div class="painscore">
                        <p>
                            Pain Score:Verable Rating Scale: (VRS) :
                        </p>
                    </div>
                    <div class="painscore">
                        <div class="nill">
                            <p>0</p>
                            <p>Nill</p>
                        </div>
                        <div class="nill">
                            <p>1</p>
                            <p>Mild</p>
                        </div>
                        <div class="nill">
                            <p>2</p>
                            <p>Moderate</p>
                        </div>
                        <div class="nill">
                            <p>3</p>
                            <p>Server</p>
                        </div>
                    </div>
                </div>
                <div class="line1">
                    <div class="systemicexamination">
                        <p>
                            Systemic Examination :
                        </p>
                    </div>
                </div>
                <div class="line1">
                    <div class="tableout">
                        <table>
                            <tr>
                                <th>GC</th>
                                <th>P/R</th>
                                <th>BP</th>
                                <th>SPO<sub>2</sub></th>
                                <th>R/R</th>
                                <th>Pallor</th>
                                <th>Cyanosis</th>
                                <th>Odema</th>
                                <th>GCS</th>
                                <th>Pupli</th>
                                <th>Plantar</th>
                                <th>Temp.</th>
                                <th>Heart</th>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Chest</td>
                                <td>Abd.</td>
                                <td>RBS</td>
                                <td>Bedsore</td>
                                <td>Smoking</td>
                                <td>Alcohol</td>
                                <td>Drugs</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="line1">
                    <div class="Provisionaldiagnosis">
                        <p>
                            Provisional Diagnosis :
                            ............................................................................
                        </p>
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

export default Doctor_sheet_ed;

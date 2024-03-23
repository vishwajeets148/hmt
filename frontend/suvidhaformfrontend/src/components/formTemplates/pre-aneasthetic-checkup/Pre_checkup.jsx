
import "./Precheckup.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"
const Pre_checkup = (doctor1) => {
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
        setInterval(() => {
            const today = new Date();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const date = today.getDate();
            const currentDate = date + "/" + month + "/" + year;
            setDate(currentDate);
            const time = today.toLocaleTimeString();
            setTime(time);

        }, 1000)
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
            <div className="container">
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
                    <h3>PRE ANESTHETIC CHECKUP</h3>
                </div>
                <div class="form-details">
                    <div class="d-flex">
                        <div class="name">
                            <p>Name : <b>{patientDetails.patient_name}</b></p>
                        </div>
                        <div class="sex">
                            <p>Age/Sex: <b>{patientDetails.patient_age + " /" + patientDetails.patient_gender}</b></p>
                        </div>
                        <div class="bedno">
                            <p>Bed No. : ......................</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="surgeon">
                            <p>Surgeon : <b>{doctors}</b></p>
                        </div>
                        <div class="anaesthetist">
                            <p>Anaesthetist : ......................</p>
                        </div>
                        <div class="date">
                            <p>Date : <b>{date}</b></p>
                        </div>
                    </div>
                    <div class="d-flex row">
                        <div class="col">
                            <p>Pre Operative Diagnosis : .........................</p>
                        </div>
                        <div class="col">
                            <p>Proposed Surgery : ..............................</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="briefhistory">
                            <p>Brief History Of Patient :........................................................</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="co">
                            <p>
                                History ofg illness/Anaesthesia/Operation/Drugs/Blood Transfusion
                            </p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="list">
                            <ol type="1">
                                <li>Cough</li>
                                <li>Wheezing</li>
                                <li>Hypertension</li>
                                <li>Diabetes</li>
                                <li>Liver Problem/Jaundice</li>
                                <li>Previouse Operation</li>
                                <li>Smoking</li>
                                <li>Headeche/Migraine</li>
                                <li>Pregnancy</li>
                                <li>Bleeding Disorder</li>
                                <li>Frequent Urination</li>
                                <li>Arthritis/Painful/Swollen Joint</li>
                                <li>Abnormality of Nerve Of muscle</li>
                                <li>Weight Lss/Gain</li>
                                <li>Fever/chills/Cold/flu</li>
                                <li>Artificial Joint/Plates ect.</li>
                            </ol>
                        </div>
                        <div class="list">
                            <ul class="yesno">
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                            </ul>
                        </div>
                        <div class="list">
                            <ol start="17">
                                <li>SOB</li>
                                <li>Palpitation</li>
                                <li>CAC/PTCA/CABG/Chest Pain</li>
                                <li>Renal Disease</li>
                                <li>Allergies drug/Food</li>
                                <li>Previous Admisssion</li>
                                <li>Alcohol</li>
                                <li>Seizures/Fainting/Syncope</li>
                                <li>Recent URI/fever</li>
                                <li>Previous Anaesthesia & Problem</li>
                                <li>Back & Neck Pain</li>
                                <li>Blackouts/Loss of Consciousness</li>
                                <li>Blood Transfusion</li>
                                <li>Indigestion/Acid Reflux/Herbum/Hiatus Hernia</li>
                                <li>Contact Lens/Pacemaker Hearing Aid</li>
                            </ol>
                        </div>
                        <div class="list">
                            <ul class="yesno">
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                                <li>YES/NO</li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="co">
                            <p>
                                32.  Any other Disease :.........................................................
                            </p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="co">
                            <p>
                                33.  Please List All the Medication(Prescribed and Or have Take in the last six months)
                            </p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="co">
                            <p>
                                34.  Are you Allergic to anything?Please list Family History :
                            </p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="co">
                            <p>
                                Regular Medicines & Details :..................................................
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
        </div>

    );
};


export default Pre_checkup;
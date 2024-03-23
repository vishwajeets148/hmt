import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Consent_for_treatment from './consent_for_treatment/Consent_for_treatment';
const Patients = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [patientDetails, setPatientDetails] = useState({
        id: "",
        patient_address: "",
        patient_age: "",
        patient_city: "",
        patient_gender: "",
        patient_name: "",
        patient_phone: "",
        patient_pincode: "",
        patient_state: " "
    });
    const [id, setId] = useState("");

    const handleChange = (e) => {
        setId(e.target.value);
    };


    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            localStorage.removeItem('patientDetails');
            const response = await axios.get(`${baseurl}/patient/${id}`);
            if(response.data.patient){


                const patientData = response.data;
                setPatientDetails(patientData.patient);
                localStorage.setItem('patientDetails', JSON.stringify(patientData)); 
            }
            else{
                alert('Patient not found');
            }

           // Update inner text after setting patient details
            // document.getElementById("pname").innerText = patientData.patient.patient_name;
            // document.getElementById("pid").innerText = patientData.patient.id;
            // document.getElementById("page").innerText = patientData.patient.patient_age;
            // document.getElementById("pphone").innerText = patientData.patient.patient_phone;
            // document.getElementById("paddress").innerText = patientData.patient.patient_address;
        } catch (error) {
            console.error("Error fetching patient details:", error);
        }
        console.log(patientDetails)
    };


    //     const handleSearch = async (event) => {
    //         event.preventDefault();
    //         try {
    //             const response = await axios.get(`${baseurl}/patient/${id}`);
    //             const patientData = response.data;
    //             // console.log("Fetched patient data:", patientData);
    //             setPatientDetails(patientData);
    //             localStorage.setItem('patientDetails', JSON.stringify(patientData));

    //         } catch (error) {
    //             console.error("Error fetching patient details:", error);
    //         }
    //         document.getElementById("pname").innerText=patientDetails.patient.patient_name;
    //         document.getElementById("pid").innerText=patientDetails.patient.id;
    //         document.getElementById("page").innerText=patientDetails.patient.patient_age;
    //         document.getElementById("pphone").innerText=patientDetails.patient.patient_phone;
    //         document.getElementById("paddress").innerText=patientDetails.patient.patient_address;
    //     };
    //     useEffect(() => {
    //       // Update inner text after patientDetails state has been updated
    //       document.getElementById('pname').innerText = patientDetails?.patient?.patient_name || '';
    //       document.getElementById('pid').innerText = patientDetails?.patient?.id || '';
    //       document.getElementById('page').innerText = patientDetails?.patient?.patient_age || '';
    //       document.getElementById('pphone').innerText = patientDetails?.patient?.patient_phone || '';
    //       document.getElementById('paddress').innerText = patientDetails?.patient?.patient_address || '';
    //   }, [patientDetails]);


    return (
        <div className="modal-dialog modal-xl mb-0">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Search For Patients
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <div className="row mt-3 Patients">
                        <div className="col-md-6 bg-light rounded">
                            <h4>Search Patients</h4>
                            <hr />
                            <form className="form" onSubmit={handleSearch}>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="" className="form-label">
                                            Search Patients
                                        </label>
                                        <input
                                            type="text"
                                            className="col-3 form-control"
                                            placeholder="Enter ID / Phone / Email"
                                            id="searchInput"
                                            name="searchInput"
                                            value={id}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-3 mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mt-3"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 bg-light rounded">
                            <h4>Patients Details</h4>
                            <hr />
                            <div className="details">
                                <div className="name">
                                    <p>
                                        Name: &nbsp; <b id='pname'>{patientDetails.patient_name}</b>
                                    </p>
                                    <p>
                                        Patient ID: &nbsp; <b id='pid'>{patientDetails.id}</b>
                                    </p>
                                    <p>
                                        Phone: &nbsp; <b id='pphone'>{patientDetails.patient_phone}</b>
                                    </p>
                                </div>
                                <div className="name">
                                    <p>
                                        Age: &nbsp; <b id='page'>{patientDetails.patient_age}</b>
                                    </p>
                                    <p>
                                        Address: &nbsp; <b id='paddress'>{patientDetails.patient_address}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <br />
            </div>

        </div>
    );
}

export default Patients;

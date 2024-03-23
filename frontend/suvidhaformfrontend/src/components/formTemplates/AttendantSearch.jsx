import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Consent_for_treatment from './consent_for_treatment/Consent_for_treatment';
import { resolvePath } from 'react-router-dom';
const AttendantSearch = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [attendantDetails, setAttendantDetails] = useState({
        address:"",
        id:"",
        name :"",
        occupation:"",
        patient_id:"",
        relation_with_patient:"",
        telephone:"",
        signature:"",
    });
    const [id, setId] = useState("");

    const handleChange = (e) => {
        setId(e.target.value);
    };


    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            localStorage.removeItem('');
            const response = await axios.get(`${baseurl}/attendant/${id}`);

            if(response.data.attendant) {

                const attendant= response.data.attendant;
                const attendantId= response.data.attendant.id;
                setAttendantDetails(attendant);
                localStorage.setItem('attendantId',JSON.stringify(attendantId));
            }else{
                alert("Attendant not found")
        
            }
            // localStorage.setItem('patientDetails', JSON.stringify(attendantId));
            // console.log(response.data.attendant);

            //Update inner text after setting patient details

            // document.getElementById("pname").innerHTML = attendant;
            // document.getElementById("pid").innerText = attendant.id;
            // // document.getElementById("page").innerText = patientData.patient.patient_age;
            // document.getElementById("pphone").innerText =attendant.telephone;
            // document.getElementById("paddress").innerText = attendant.address;

        } catch (error) {
            
            console.error("Error fetching patient details:", error);
        }
        // console.log(attendantDetails.name)
    };


    return (
        <div className="modal-dialog modal-xl mb-0">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Search For Attendant
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
                            <h4>Search Attendant</h4>
                            <hr />
                            <form className="form" onSubmit={handleSearch}>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="" className="form-label">
                                            Search Attendant
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
                            <h4>Attendant Details</h4>
                            <hr />
                            <div className="details">
                                <div className="name">
                                    <p>
                                        Name: &nbsp; <b id='pname'>{attendantDetails.name}</b>
                                    </p>
                                    <p>
                                        Patient ID: &nbsp; <b id='pid'>{attendantDetails.id}</b>
                                    </p>
                                    <p>
                                        Phone: &nbsp; <b id='pphone'>{attendantDetails.telephone}</b>
                                    </p>
                                </div>
                                <div className="name">
                                    <p>
                                        Occupation: &nbsp; <b id=''>{attendantDetails.occupation}</b>
                                    </p>
                                    <p>
                                        Address: &nbsp; <b id='paddress'>{attendantDetails.address}</b>
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

export default AttendantSearch;
import React, { useState, useEffect } from "react";
import "./Hivpretesting.css";
import axios from "axios";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"
const Hiv_testing = () => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const [data, setData] = useState({});
  const [id, setid] = useState({ id: "" })
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [attendantId, setAttendantId] = useState('');
  const[state1, setState] = useState('');
  const[city, setCity] = useState('');

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

  const state=async()=>{
    const stateId= data.hospital.state_id;
    const cityId= data.hospital.city_id;
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
          <div className="col-9">
            <b>
              <h1 id="hospitalName" className="m-1">
                {hospitaldetails.name}
              </h1>
            </b>
            <p id="hospitalAddress">
              <b>
              {hospitaldetails.address + "( "+ hospitaldetails.pincode +" )"+
                  " , " + city+" ,"+
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
            <h3>HIV Pre - Testing Information and Consent</h3>
          </div>
          <div class="pre-test-info">
            <h5>Pre - Testing Information:</h5>
            <ol>
              <li>
                HIV-Human Immunodeficiency Virus. Also known as HTLV (human t-cell
                lymphotropic virus type III) or LAV (Lymphadenopathy Associated
                Virus.) This is the "AIDS" Virus.
              </li>
              <li>
                HIV Antibody Test I & II this is the initial test for detection of
                exposure to HIV in the blood. Antibodies are substance made by the
                body to fight infection
              </li>
            </ol>
          </div>
          <div class="pre-test-info">
            <h5>A Negative Test can mean :</h5>
            <ol>
              <li>
                That you have not been exposed to or infected by the AIDS virus
              </li>
              <li>
                That you have been exposed to the AIDS virus, but your body has not
                had enough time to make antibodies. If his this is possibility, your
                doctor may recommend repeating the lest during the next 3 to 6
                months
              </li>
              <li>That the test was falsely negative for technical reasons.</li>
            </ol>
          </div>
          <div class="pre-test-info">
            <h5>A Positive Test can mean :</h5>
            <ol>
              <li>
                You do not necessarily have AIDS. Your blood should be sent for
                another, more specific and confirmatory test.
              </li>
              <li>
                If another HIV antibody test return positive, then you most likely
                been exposed to and have AIDS virus and you should consider yourself
                capable of passing the virus to other.
              </li>
            </ol>
          </div>
          <div class="pre-test-info">
            <h5>This test it recommended for the following high-risk groups:</h5>
            <ol>
              <li>
                Homosexuality even one homosexual encounter, since 1976 puts a
                person at risk
              </li>
              <li>Bisexuality</li>
              <li>
                Blood transfusions any transfusion between 1976 and 1985 may have
                caused infectio
              </li>
              <li>
                Multiple sexual partners Multiple heterosexual or homosexual
                partners increase th infection.
              </li>
              <li>
                Prostitution Persons born in a country with a high incidence of
                heterosexual tra persons immigrating from Haiti, Central Africa etc
                since 1977 are at increased risk. It is in mention that PREVENTION
                is the best policy in dealing with AIDS (or a positive HIV test) and
                transmission it is important to avoid the following.
                <ol>
                  <li>Sexual contact with persons suspected of AIDS virus.</li>
                  <li>Sexual contact with multiple partners.</li>
                  <li>
                    Intravenous drug abuse or sexual contact with people who use
                    intravenous drugs.
                  </li>
                  <li>
                    Oral-genital contact or open-mouthed kissing with high-risk
                    contacts.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <div class="para">
            <p>
              It is recommended that you and your partner use condoms as protection
              against the transmission of the AIDS virus. However, it should be
              noted that while the use of condoms is considered to be a "Safe Sexual
              Practice", it should not be considered 100% effective, and, therefore,
              it is important for you to choose partners carefully and to avoid high risk
              behaviours as noted in the guideline Please feel free to consult your
              primary care physician with any questions you may have about this  Information.
            </p>
          </div>
          <p><b>Test Result will be confidential</b></p>
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


export default Hiv_testing;
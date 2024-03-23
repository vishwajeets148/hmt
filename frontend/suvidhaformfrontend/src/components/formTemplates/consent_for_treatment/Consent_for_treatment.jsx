import "./Consent_for_treatment.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormNavbar from "../FormNavbar"
import Attendant from "../Attendant";
import Patients from "../Patients"
import PatientRegister from "../PatientRegister"
import AttendantSearch from "../AttendantSearch"

const Consent_for_treatment = (doctor1) => {
  const baseurl = process.env.REACT_APP_BASEURL;
  const [data, setData] = useState({});
  const [id, setid] = useState({id: ""})
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
  
  const handlechageDoctor=(data) => {
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
      const attendantId=localStorage.getItem('attendantId');
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
    <div className="">
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
                Phone - {hospitaldetails.phone_primary + " ," + hospitaldetails.phone_secondary + ", Email : " + hospitaldetails.email }
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




        <hr className="separato" />
        <div className="form-container">
          <div className="english-content">
            <p className="consent-heading text-center">Consent for Treatment</p>
            <p className="consent-main-para dropdown ">
              I the undersigned authorize &nbsp;<b id="doc-btn"> {doctors} </b> &nbsp;
              {/*              
            <button
              className="btn dropdown-toggle btn-secondary  modal-btn doc-btn p-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="doc-btn"
            >
              Select Doctor
            </button>
            <ul className="dropdown-menu ">
              {doctors.map((doctor) => (
                <li className="dropdown-item" key={doctor.id} value={doctor.name}  onClick={() => handleDoctorSelect(doctor.name)}>
              <b>{doctor.name}</b>
                </li>
              ))}
            </ul> */}


              and such another physician/surgeon as may be assigned by them the
              nurses, technician, assistant and other person employed in the
              centre of the treatment of my patient at <b>{hospitaldetails.name} </b>.
               I have been explained that during hospitalization my
              Patient will be administrated drugs either orally or intravenously
              or by any other route as is required and for caring type of
              diagnostic examination, I have been explained the risk associate
              with the drug administration. I.V. Infusion, blood transfusion etc.
              And the future prognosis and cause of disease which my patient is
              having, I voluntarily accept the risk. I have also been explained
              that the facilities better than here may be available at other
              places to deal with emergencies arising out of these situations or
              arising out of disease itself.
            </p>
          </div>
          <div className="ptients-sign">
            <p>Patients Signature / Thumb impression</p>
          </div>
          <div className="hindi-para">
            <p lang="hi" className="hind-consent-main-para hi">
              <br />
              मैं अधोहस्ताक्षर, डा०. <b id="doc-name"> {doctors} </b> और इस अस्पताल द्वारा निर्धारित किसी
              भी अन्य डाक्टर एंव नर्स, टैक्नीषियन व अन्य सहायक को अपने मरीज का
              ईलाज <b> &nbsp;{hospitaldetails.name} &nbsp;</b>, <b>{hospitaldetails.address}</b> में कराने की स्वीकृति
              देता / देती हूँ।
              <br />
              मुझे बता दिया गया है कि ईलाज के दौरान मेरे मरीज को दवाईयाँ, नर्स
              द्वारा मुख में या किसी भी प्रकार से दी जा सकती हैं। मुझे दवाईयों
              द्वारा व खून चढानें द्वारा होने वाली परेषानियों व खतरों से आगाह कर
              दिया गया है। मैं अपनी इच्छा से इन खतरों का सामना करने के लिए तैयार
              हूँ। और हर तरह की जाँच भी कराने के लिए तैयार हूँ। मुझे बता दिया गया
              है कि इस अस्पताल से भी अच्छी सुविधाएँ और जगहों पर भी उपलब्ध हो सकती
              हैं। मुझे सभी जरूरी जानकारी उपलब्ध करा दी गई हैं व मेरे हर प्रष्न का
              उत्तर मिल गया है। मैं पूर्ण रूप से संतुष्ट हूँ।
              <br />
              Details of attendant/Patient admitted by
            </p>
          </div>
          <div className="details-of-attendant">
            <ul>
              <li>
                Name/
                <span lang="hi" className="hi">
                  नाम &nbsp;
                  <b className="PatientName">
                    {patientDetails.patient_name} &nbsp; {attendant.name}
                  </b>
                </span>
              </li>
              <li>
                Address/
                <span lang="hi" className="hi">
                  पता &nbsp;<b className="Address">{AttendantAddress} &nbsp; {PatientAddress} </b>
                </span>
              </li>
              <li>
                Occupation/
                <span lang="hi" className="hi">
                  व्यवसाय &nbsp;
                  <b className="Occupation">{attendant.occupation}</b>
                </span>
              </li>
              <li>
                Telephone/
                <span lang="hi" className="hi">
                  दूरभाष &nbsp;
                  <b className="Phone">{patientDetails.patient_phone} &nbsp; {attendant.telephone}</b>
                </span>
              </li>
              <li>
                Relation with Patients(if any )/
                <span lang="hi" className="hi">
                  संबंध &nbsp;<b className="Relation">{attendant.relation_with_patient}</b>
                </span>
              </li>
              <li className="sign ">
                <p>Signature / Thumb impression: - &nbsp; <b className="text-uppercase">{attendant.signature}</b></p>
              </li>
            </ul>
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

export default Consent_for_treatment;

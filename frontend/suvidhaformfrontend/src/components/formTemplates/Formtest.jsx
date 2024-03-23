import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Formtest = () => {
    const baseurl = process.env.REACT_APP_BASEURL;
    const [data1, setData1] = useState(null);

    useEffect(() => {
        const getForm = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:3004/api/form/forms/18");
                console.log(response.data.form.content);
                const html = response.data.form.content;
          
             setData1(html);
            } catch (error) {
                console.error("Error fetching form data:", error);
            }
        };

        getForm();
    }, []);
    const [data, setData] = useState({});
    const [id, setid] = useState({id: ""})
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [attendantId, setAttendantId] = useState('');
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
    //  this use effect call when the page render is finished
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
  
        const getdoc = async () => {
          try {
            const response = await axios.get(`${baseurl}/doctor/doctors/hospitals/${id}`);
            setDoctors(response.data);
            console.log(response.data);
            console.log("call todoctor");
          } catch (error) {
            console.log(error);
          }
        };
  
        getdoc();
        fetchData();
      } else {
        console.error('ID or token not available in local storage');
      }
    }, []);
  
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
  
      }
    }, [data]);
  
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
        <>
             <div dangerouslySetInnerHTML={{ __html: data1 }} />
        </>

    );
};

export default Formtest;

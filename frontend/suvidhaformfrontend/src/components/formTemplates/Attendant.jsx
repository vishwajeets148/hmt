import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Attendant = () => {
 const baseurl= process.env.REACT_APP_BASEURL;
 let [aid,setAid]=useState({
  id:""
 })
    const [attendantData, setAttendantData] = useState({
        name: "",
        address: "",
        occupation: "",
        telephone: "",
        relation_with_patient: "",
        patient_id: "",
        signature: "",
      });
      const onChangeHandlers = (e) => {
        const { name, value } = e.target;
        setAttendantData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //Assuming you make an API call to submit the attendant data
      const response = await axios.post(
        `${baseurl}/attendant/addAttendant`,
        attendantData
      );

     setAid(response.data.attendant.id);
  document.getElementById('generatedId').innerHTML=response.data.attendant.id;
     console.log(aid);
      localStorage.setItem('attendant', JSON.stringify(response.data.attendant));
      // localStorage.setItem('attendant', JSON.stringify(response)
      // After successful submission, update patientDetails with attendantData
      // For demonstration, let's assume the submission was successful

      // Update patientDetails with attendantData
    //   setPatientDetails(attendantData);
  
      alert("Attendant data added successfully");
       setAttendantData({
        name: "",
        address: "",
        occupation: "",
        telephone: "",
        relation_with_patient: "",
        patient_id: "",
        signature: "",
       });
    } catch (error) {
      console.log("Error submitting attendant data:", error);
    }
  };


  return (
    <div className="modal-dialog mb-0">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Please Fill the deatils of Attendant
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-header"></div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name / नाम
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                      name="name"
                      required
                      value={attendantData.attendant_name}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address / पता
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      placeholder="Enter address"
                      name="address"
                      value={attendantData.address}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="occupation" className="form-label">
                      Occupation / व्यवसाय
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="occupation"
                      required
                      placeholder="Enter occupation"
                      name="occupation"
                      value={attendantData.occupation}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telephone" className="form-label">
                      Telephone / दूरभाष
                    </label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      id="telephone"
                      placeholder="Enter telephone"
                      name="telephone"
                      value={attendantData.telephone}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="relation" className="form-label">
                      Relation with Patients (if any) / संबंध
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="relation"
                      required
                      placeholder="Enter relation"
                      name="relation_with_patient"
                      value={attendantData.relation_with_patient}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="relation" className="form-label">
                      Digital Signature
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sign"
                      placeholder="Sign Please"
                      name="signature"
                      value={attendantData.signature}
                      onChange={onChangeHandlers}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>

                <div className="bg-white">
                  <p className='text-center bg-primary-subtle m-1' > Generated ID: <b id='generatedId'>......</b> </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Attendant
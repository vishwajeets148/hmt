import React from "react";
import DashboardNav from "./DashboardNav";
import "./Hospital.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";





const FormManager = () => {
  const baseurl=process.env.REACT_APP_BASEURL;
  const [data, setData] = useState(null);

  const getform = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3004/api/form/forms/4");
      console.log(response.data.form.content);
      const html = response.data.form.content;
      setData(html);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };
  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="dashboard" id="dashbaord">
        <div>
          <div className="container-fluid pt-4 px-4">
            <div className="scrollable-table" id="uppper">
              <table>
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Repeat this row structure for each form */}
                  <tr>
                    <td>Consent Form For Treatment</td>
                    <td>
                      <Link to="/hospital/forms/Consent" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Consent Form For HIV Testing</td>
                    <td>
                      <Link to="/hospital/forms/hiv" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Consent From For Surgical Operation</td>
                    <td>
                      <Link to="/hospital/forms/operation" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>HIV Pre - Testing Information and Consent</td>
                    <td>
                      <Link to="/hospital/forms/hivtesting" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
              
                  <tr>
                    <td>Care Plan</td>
                    <td>
                      <Link to="/hospital/forms/care" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Nursing Admission Assessment</td>
                    <td>
                      <Link to="/hospital/forms/nurseadmission" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Doctor Assesment Sheet-ED</td>
                    <td>
                      <Link to="/hospital/forms/doctorsheet" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
        
                  <tr>
                    <td>Nurses Assessment Sheet-ED</td>
                    <td>
                      <Link to="/hospital/forms/nursesheet" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Pre Anaesthetic Checkup</td>
                    <td>
                      <Link to="/hospital/forms/precheckup" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                
                  <tr>
                    <td>Nutrition Screening</td>
                    <td>
                      <Link to="/hospital/forms/nutrition" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Nursing Clinical Assessment</td>
                    <td>
                      <Link to="/hospital/forms/nursingclinic" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Patient Feedback Form</td>
                    <td>
                      <Link to="/hospital/forms/patientfeedback" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>OT Notes</td>
                    <td>
                      <Link to="/hospital/forms/otnote" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Post Operative Plan Of Care</td>
                    <td>
                      <Link to="/hospital/forms/postcareplan" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Post Operative Instruction</td>
                    <td>
                      <Link to="/hospital/forms/postinstraction" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Pre Anaesthetic Checkup</td>
                    <td>
                      <Link to="/hospital/forms/precheckup" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Pre Operative Checklist </td>
                    <td>
                      <Link to="/hospital/forms/prechecklist" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Anaesthetic Record Pre-Operative Evaluation Form </td>
                    <td>
                      <Link to="/hospital/forms/anaestheticevalution" className="btn btn-primary form-button">
                        Go to Form
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>check form </td>
                    <td>
                      <Link to="/hospital/forms/formtest" className="btn btn-primary form-button" >
                        Go to Form
                      </Link>
                      
                    </td>
                  </tr>
                  {/* Add more rows for additional forms */}
                </tbody>
              </table>
            </div>
          </div>

          {/* <a href="#uppper"
            className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i className="bi bi-arrow-up"></i>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default FormManager;

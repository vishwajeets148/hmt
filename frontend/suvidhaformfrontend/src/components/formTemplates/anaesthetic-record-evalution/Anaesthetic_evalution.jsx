import React from "react";
import "./Anaestheticevalution.css";


const Anaesthetic_evalution = () => {
    
    return (
        <div>
             <div class="header">
        <div class="logo">
            <img class="logo-img" id="hospitalLogo" src="../assets/img/logo-removebg.png" alt="" />
        </div>
        <div class="heading">
            <h1 id="hospitalName">C.B. MEMORIAL NURSING HOME</h1>
            <p id="hospitalAddress">
                K-67, Palhera Chouraha, Pallawpuram Phase-2, Meerut
            </p>
            <p>
                Phone - <span id="phone1">0121-43335598</span>,
                <span id="phone2"> 8979186366</span>
            </p>
        </div>
        <div class="line2">
            <div class="formboxdetails">
                <div class="line2">
                    <div class="name">
                    <p> Patient Name :........................</p>
                    </div>
                </div>
                <div class="line2">
                    <div class="agesex">
                        <p>Age :..............</p>
                    </div>
                    <div class="agesex">
                        <p>Sex :..............</p>
                    </div>
                </div>
                <div class="line2">
                    <div class="ipd">
                     <p> IPD No. :................................</p>
                    </div>
                </div>
                <div class="line2">
                    <div class="uhid">
                        <p>UHID :...........</p>
                    </div>
                    <div class="uhid">
                        <p>DOA :............</p>
                    </div>
                </div>
            </div>
    </div>
    <hr class="seprator" />
    <div class="line1">
        <div class="chief">
            <p>
              Dapartment of Anaesthesiology-                  
            </p>
        </div>
    </div>
    <div class="form-container">
        <div class="form-heading">
            <h3>ANAESTHETIC RECORD PRE-OPERATIVE EVALUATION FORM</h3>
        </div>
        <hr class="thinline"></hr>
        <div class="form-details">
            <div class="line1">
                <div class="chief">
                    <p>
                      Date                   
                    </p>
                </div>
                <div class="chief">
                    <p>
                      Time                   
                    </p>
                </div>
                <div class="chief">
                    <p>
                      Blood Group                   
                    </p>
                </div>
            </div>
        <hr class="thinline1"></hr>
            <div class="line1">
                <div class="provisional">
                    <p>HT.</p>
                </div>
                <div class="provisional">
                    <p>WT.</p>
                </div>
                <div class="provisional">
                    <p>BMI.</p>
                </div>
                <div class="provisional">
                    <p>PULSE.</p>
                </div>
                <div class="provisional">
                    <p>BP.</p>
                </div>
                <div class="provisional">
                    <p>BR.</p>
                </div>
                <div class="provisional">
                    <p>TEMP.</p>
                </div>
            </div>
            <hr class="thinline1"></hr>
            <div class="line1">
                <div class="Preventative">
                    <p>DIAGNOSIS</p>
                </div>
                <div class="miss">
                    <p>
                        <table>
                            <tr>
                              <td>ALERTS</td>
                            </tr>
                            <tr>
                              <td>Respiratory/haemodynamic support    /   Yes/No</td>
                            </tr>
                            <tr>
                              <td></td>
                            </tr>
                             <tr>
                              <td></td>
                            </tr>
                             <tr>
                              <td></td>
                            </tr>
                             <tr>
                              <td>Allergy / ASA / Consent</td>
                            </tr>
                          </table>
                    </p>
                </div>
            </div>
            <div class="line1">
                <div class="proposedsurg">
                    <p>PROPOSED SURGERY </p>
                </div>
           </div>
           <div class="line1">
            <div class="cardiosystem">
                <p>
                    <table>
                        <tr>
                          <td><h4>CARDIOVASCULAR SYSTEM</h4>
                            <li>Hypertension</li>
                            <li>Cheast Pain</li>
                            <li>Nyha Grade/Mets</li>
                            <li>Examination</li>
                            <li>peripheral Puls</li>
                          </td>
                          <td><h4>PULMONARY SYSTEM</h4>
                            <li>Cough</li>
                            <li>Asthma</li>
                            <li>COPD</li>
                            <li>KOCH's</li>
                            <li>Smoker</li>
                            <li>Examination</li>
                        
                        </td>
                          <td><h4>CENTRAL NERVOUS SYSTEM</h4>
                            <li>Paralysis/Stroke</li>
                            <li>Epilepsy</li>
                            <li>PIVD./Arthritis</li>
                            <li>Examination</li>
                            <hr class="thinline"></hr>
                            <li>SPIN Examination</li> 
                        </td>
                        </tr>
                        <tr>
                          <td><h4>GIT/HEPATO/RENAL/COAGULATIONDISORDERS</h4></td>
                          <td><h4>ENDOCRINE SYSTEM</h4>
                            <li>Diabetes</li>
                            <li>thyroid</li>
                            <li>Steroid Use</li>
                        </td>
                          <td><h4>PREVIOUSE ANAESTHETIC</h4></td>
                        </tr>
                        <tr>
                            <td><h4>AIRWAY ASSESSMENT</h4>
                                <li>Mouth Opening</li>
                                <li>Mallampatti grade</li>
                                <li>Mentothyoid Distance</li>
                                <li>Neck Movement</li>
                                <li>Dentition</li>
                                <hr class="thinline"></hr>
                                <li>IMPLANTS : H/O Glaycina % Eye Problems</li>  
                            </td>
                            <td><h4>DRUG HISTORY/ANYADDICTION</h4>
                          </td>
                            <td><h4>FAMILY HISTORY</h4>
                            <hr class="thinline"></hr>
                                <h4>Anaesthetic Plan</h4>
                                <li>GA/Spinal/Epidura/Nerve/Block/MAC</li>
                                <li>Post operative Pain Relief PAC/Epidural infusion/PEA/MI/IV/ORAL</li>
                            </td>
                          </tr>
                            <tr>
                                <td><h4>INVESTIGATION</h4>
                                  <li>HB :</li>
                                  <li>WBC :</li>
                                  <li>Platelet :</li>
                                  <li>PT :__________/_________</li>
                                  <li>APPT :__________/_________</li>
                                  <li>Urine R/E/Macroscopic :</li>
                                  <li>Culture :</li>
                                </td>
                                <td>
                                  <li>BUN</li>
                                  <li>Create :</li>
                                  <li>NA :</li>
                                  <li>K : CL :</li>
                                  <li>Hco<sub>3</sub> ca:</li>
                                  <li>Glucose: G/PP/R</li>
                                  <li>HBA<sub>1</sub>C</li>
                                  <li>PFT:</li>
                              </td>
                                <td>
                                  <li>T3</li>
                                  <li>TSH :</li>
                                  <li>Se,Bil</li>
                                  <li>Total :_______Direct :______</li>
                                  <li>SGOT :_______SGPT :________</li>
                                  <li>ALB :________ALK.Phos:_______</li>
                                  <li>HIV : HBsAg HCV:</li> 
                              </td>
                              </tr>
                      </table>
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="dets">
                <p>
                    PRE-OP.INSTRUCTION:
                </p>
            </div>
            <div class="dets">
                <p>
                    SPECIALITY REVIW:
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="dets">
                <p>
                  NI by mouth after
                </p>
            </div>
            <div class="dets">
                <p>
                  Acceptance Note:
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="dets">
                <p>
                  Drugs/Premedication
                </p>
            </div>
            <div class="dets">
                <p>
                  SIGN.of Anaesthetic (PAC):
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="dets">
                <p>
                  Further advice :
                </p>
            </div>
            <div class="dets">
                <p>
                 (Name in capital)
                </p>
            </div>
        </div>
    </div>
</div>

        </div>
</div>

    );
};


export default Anaesthetic_evalution;
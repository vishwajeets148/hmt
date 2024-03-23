import React from "react";
import "./Patientfeedback.css";

const Patient_feedback = () =>{
    return(
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
    </div>
    <hr class="seprator" />
    <div class="form-container">
        <div class="form-heading">
            <h3>PATIENT FEEDBACK FORM</h3>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="name">
                    <p> Patient Name :................................................</p>
                </div>
                <div class="sex">
                    <p>R. No. :.....................................................</p>
                </div>
            </div>
            <div class="line1">
                <div class="marital">
                    <p>Dear Patient <br/>
                    We will be grateful,if you can spare some of your valuable time in sharing
                    you views by filling and returning this form. Your Support Will help us in 
                    serving you better</p>
                </div>
            </div>
            <hr class="seprator1" />
            <div class="line1">
                <div class="name">
                    <p> Patient Name :................................................</p>
                </div>
                <div class="sex">
                    <p>Date of Visit :.....................................................</p>
                </div>
            </div>
            <div class="line1">
                <div class="name">
                    <p> Room No. :................................................</p>
                </div>
                <div class="sex">
                    <p>Regn No. :.....................................................</p>
                </div>
            </div>
            <div class="line1">
                <div class="name">
                    <p> Mobile No. :................................................</p>
                </div>
                <div class="sex">
                    <p>Phone No. :.....................................................</p>
                </div>
            </div>
            <div class="line1">
                <div class="status">
                    <p>Your Basic Ckeck-up Was Done in time : </p>
                </div>
                <div class="status">
                    <p> Yes <input type="checkbox"/> </p>
                </div>
                <div class="status">
                    <p> NO. <input type="checkbox"/> </p>
                </div>
            </div>
            <div class="line1">
                <div class="status">
                    <p>The actual test performed were as per instructions : </p>
                </div>
                <div class="status">
                    <p> Yes <input type="checkbox"/> </p>
                </div>
                <div class="status">
                    <p> NO. <input type="checkbox"/> </p>
                </div>
            </div>
            <div class="line1">
                <div class="status">
                    <p>You are coming to our hospital for the test : </p>
                </div>
                <div class="status1">
                    <p> 1 <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> 2 <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> 3 <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> 4 <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> 5 <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> More <input type="checkbox"/> </p>
                </div>
                <div class="status1">
                    <p> Year <input type="checkbox"/> </p>
                </div>
            </div>
            <div class="line1">
                <div class="signature">
                    <p> </p>
                </div>
                <div class="parent_signature">
                    <p>Satisfaction Level(Sacle of 5 To 1)</p>
                </div>
           </div>
           <div class="line1">
            <div class="next1">
                <p>
                                 
                </p>
            </div>
            <div class="next">
                <p>
                  High 5              
                </p>
            </div>
            <div class="next">
                <p>
                  4              
                </p>
            </div>
            <div class="next">
                <p>
                  3              
                </p>
            </div>
            <div class="next">
                <p>
                  2              
                </p>
            </div>
            <div class="next">
                <p>
                  Low 1              
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    1. Emergency Staff-helpful Polite
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    2. Main reception Staff-helpful & polite
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    3. Nursing Staff-helpful & Polite
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    4. Persona care
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    5. Investigation was comfortable
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    6.Ambulance Service (If availed)
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    7. Waiting Area -comfortable & Clean
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    8. Cleanliness of room / Toilets
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    9. Discharge of room / Toilets
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    10. Room Nursing care
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    11. Room Facility (Bed sheet & pillow Cover etc.)
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    12. Pantry Service (Canteen) 
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="next1">
                <p>
                    13. What is your Satisfaction Level ?
                </p>
            </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p> <input type="checkbox"/> </p>
                </div>
                <div class="nextint">
                    <p>  <input type="checkbox"/> </p>
                </div>
        </div>
        <div class="line1">
            <div class="chief">
                <p>
                  14. Would you recommend us to dotor
                </p>
            </div>
            <div class="chief">
                <p>
                  Yes / No
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="ambulatory">
                <p>
                   15. Services provided by the Doctors____________________________
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="ambulatory">
                <p>
                   16. Your Suggestion for improving our service quality____________________
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="ambulatory">
                <p>
                   17. Unpleasent Experience, if any 
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="ambulatory">
                <p>
                    Signature_________________ 
                </p>
            </div>
            <div class="ambulatory">
                <p>
                    Patient/Relation(Relation)_____________
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="ambulatory">
                <p>
                   Name______________ 
                </p>
            </div>
        </div>
    </div>
</div>

        </div>

    );
};


export default Patient_feedback;

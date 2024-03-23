import React from "react";
import "./Nursingclinic.css";



const Nursing_clinic = () => {
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
    </div>
    <hr class="seprator" />
    <div class="form-container">
        <div class="name-of-form">
            <h3>NURSING CLINICAL ASSESMENT</h3>
        </div>

        <div class="vitals">
            <div class="date">
                <div class="vit">
                    <p><b>VITALS:-</b></p>
                </div>
                <div class="dat">
                    <p>Date ...........</p>
                </div>
            </div>
            <div class="fields">
                <div class="temp">
                    <p>TEMPRATURE: ....</p>
                </div>
                <div class="pules">
                    <p>PULES .....</p>
                </div>
                <div class="bp">
                    <p>B.P ...........</p>
                </div>
                <div class="respi">
                    <p>RESPIRATION ......</p>
                </div>
                <div class="spo2">
                    <p>SPO2 ......</p>
                </div>
            </div>
        </div>
        <div class="fall-asses">
            <p><b>FALL ASSESMENT :</b></p>
            <div class="details">
                <div class="det1">
                    <p>AGE:..</p>
                    <p>IMPPAIRED JUDGEMENT</p>
                    <p>SENSORY DEFICT</p>
                </div>
                <div class="det1">
                    <p>PREVIOUS FALL</p>
                    <p>CVS/CNS MEDICATION</p>
                    <p>MUSCULAR WEAKNESS</p>
                </div>
                <div class="det2">
                    <p>BOWEL/BLADDER NEEDS </p>
                    <p>OTHER</p>
                </div>
            </div>
        </div>
        <div class="pain-asses">
            <p><b>PAIN ASSESMENT :-</b></p>
            <div class="pain1">
                <p>ACUTE (\6 WEEKS)</p>
                        <p>CHRONIC (/6 WEEKS)</p>

            </div>
            <div class="pain2">
                <p>NONE</p>
                <p>ANNOYING 02</p>
                <p>UNCONFORTABLE</p>
                <p>MUSCULER WEAKNESS</p>
            </div>
        </div>
        <div class="psyco-status">
            <p><b>PSYCHOLOGICAL STATUS :-</b></p>
            <div class="psy1">
                <p>ANXIOUS</p>
                <p>DEPRESSESD</p>
                <p>ANGRY</p>
            </div>
            <div class="psy2">
                <p>COMBATIVE</p>
                <p>SLEEP DISORDER</p>
                <p>OTHER</p>
            </div>

        </div>

        <div class="ability">
            <p><b>ABILITY TO PERFORM ACTIVITES OF DAILY LIFE</b></p>
            <div class="acti">
                <p>ACTIVITY</p>
                <p>INDEPENDENT</p>
                <p>ASSISTED</p>
                <p>DEPENDENT</p>
            </div>
            <div class="acti">
                <p>BATHING</p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
            <div class="acti">
                <p>DRESSING</p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
            <div class="acti">
                <p>EATING</p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
            <div class="acti">
                <p>MOBILE/ WALKING </p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
            <div class="acti">
                <p>STATUS/ CLIMBING </p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
            <div class="acti">
                <p>TOILET</p>
                <p>.........</p>
                <p>.........</p>
                <p>.........</p>

            </div>
        </div>
 <div class="social">
    <p><b>SOCIAL HISTORY</b></p>
    <div class="soc1">
        <p>DO YOU SMOKE</p>
        <p>YES/NO</p>
        <p>PACKS/DAY  FOR -------- YES</p>

    </div>
    <div class="soc1">
        <p>DO YOU DRINK</p>
        <p>YES/NO</p>
        <p>PACKS/DAY  FOR -------- YES</p>

    </div>
 </div>
 <div class="list">
    <ol>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        <li>
            <div class="drk1">
                <p>LANGUAGE PROBLEM </p>
                <p>YES/NO  &nbsp; ACTION NEEDED</p>
            </div>
        </li>
        
    </ol>
 </div>

    </div>

        </div>
    );
};


export default Nursing_clinic;

    



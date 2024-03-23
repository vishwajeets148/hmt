import React from "react";
import "./Postplancare.css";

const Post_plan = () => {
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
            <h3>POST OPERATIVE PLAN OF CARE</h3>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="name">
                    <p>Name of Patient :.............................................................</p>
                </div>
                <div class="sex">
                    <p>Age/Sex:......................</p>
                </div>
            </div>
            <div class="line1">
                <div class="uhid">
                    <p>UHID No:......................................................................</p>
                </div>
                <div class="ipd">
                    <p>IP No:.......................................................................</p>
                </div>
            </div>
            <div class="line1">
            <div class="namesurgeon">
                <p>Name of Surgeon:.....................................................................</p>
            </div>
        </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Advice on IV Fluids :
                    ............................................................................
                </p>
            </div>
        </div>

        <div class="line1">
            <div class="sonof">
                <p>
                    Medication to be Administered :
                    ............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Care of Wound :
                    ............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Nursing Care :
                    ............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Complication to be observed (if any) :
                    ............................................................................
                </p>
            </div>
        </div>
    </div> 
</div>

    );
};


export default Post_plan;
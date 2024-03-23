import React from "react";
import "./Prechecklist.css";


const Pre_checklist = () => {
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
        <div class="form-heading">
            <h3>PRE OPERATIVE CHECKLIST</h3>
        </div>
        <div class="formbutton">
            <button type="button">Patient Label</button>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="pac">
                    <p> </p>
                </div>
                <div class="pac">
                    <p></p>
                </div>
                <div class="pac1">
                    <p>YES</p>
                </div>
                <div class="pac1">
                    <p>NO</p>
                </div>
                <div class="pac1">
                    <p>NA</p>
                </div>
            </div>
            <div class="line1">
                <div class="pac">
                    <p>PAC </p>
                </div>
                <div class="pac">
                    <p>Date :</p>
                </div>
                <div class="pac1">
                    <p> <input type="checkbox"/></p>
                </div>
                <div class="pac1">
                    <p> <input type="checkbox"/></p>
                </div>
                <div class="pac1">
                    <p><input type="checkbox"/></p>
                </div>
            </div>
            <div class="line1">
                <div class="pac">
                    <p>Physician Clearance For surgery :</p>
                </div>
                <div class="pac">
                    <p></p>
                </div>
                <div class="pac1">
                    <p><input type="checkbox"/></p>
                </div>
                <div class="pac1">
                    <p><input type="checkbox"/></p>
                </div>
                <div class="pac1">
                    <p><input type="checkbox"/></p>
                </div>
            </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Vital Signs :
                </p>
            </div>
            <div class="sonof">
                <p>
                    B.P :......................
                </p>
            </div>
            <div class="sonof">
                <p>
                    Temp :...........
                </p>
            </div>
            <div class="sonof">
                <p>
                    Pulse :...........
                </p>
            </div>
            <div class="sonof">
                <p>
                   Resp :..........
                </p>
            </div>
        </div>

        <div class="line1">
            <div class="sonof1">
                <p> AM Care
                </p>
            </div>
            <div class="sonof1">
                <p> Bath
                </p>
            </div>
            <div class="sonof1">
                <p> Shower
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof1">
                <p>
                    Voided
                </p>
            </div>
            <div class="sonof1">
                <p>
                    Amt.
                </p>
            </div>
            <div class="sonof1">
                <p>
                    Time
                </p>
            </div>
            <div class="sonof1">
                <p>
                    On Catheter
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof1">
                <p>
                    Enema 
                </p>
            </div>
            <div class="sonof1">
                <p>
                    Bowel Wash 
                </p>
            </div>
            <div class="sonof1">
                <p>
                    Laxaives to Dress 
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="medi">
                <p>
                    Pre-op Medication given.............
                </p>
            </div>
            <div class="madi">
                <p>
                    Time.............
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Skin Prep :</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="medi">
                <p>
                   Identity of site :
                </p>
            </div>
            <div class="medi">
                <p>
                    Right.............
                </p>
            </div>
            <div class="madi">
                <p>
                    Left.............
                </p>
            </div>
        </div>
        <div class="line1"> 
            <div class="Proposed">
                <p>
                    Proposed Proedure.............
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Identity Band  :</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Allergic Band  :</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Denture/partial Plate/Upper/Lower/Fixed/Removable.................</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>contact Lenses / Glasses...............</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> Jewellery/Yellow/Glasses.............</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> Special Consent for Amputation.............</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> Ready PCR/WB.............Unit FFP..........Unit</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> CBC</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> Culture</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p> ECG</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>PFT</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Chest X-RAY</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>MRI</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>CT Scan</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>USG</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Echogram</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Angrogram</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>X-RAY Regional</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Others</p>
            </div>
            <div class="pac">
                <p></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
            <div class="pac1">
                <p><input type="checkbox"/></p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Signature o S/N</p>
            </div>
            <div class="pac">
                <p>Signature of S/N Receiving in OT</p>
            </div>
            <div class="pac">
                <p>Checklist</p>
            </div>
            <div class="pac">
                <p>Pre</p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Date :</p>
            </div>
            <div class="pac">
                <p>Signature of S/N Receiving Ward</p>
            </div>
            <div class="pac">
                <p>Signature of S/N</p>
            </div>
            <div class="pac">
                <p>Post</p>
            </div>
        </div>
        <div class="line1">
            <div class="pac">
                <p>Time : </p>
            </div>
        </div>
       </div>
    </div> 
        </div>

    );
};

export default Pre_checklist;
import React from "react";
import "./Postinstruction.css";


const Post_instruction = () => {
    return (
        <div>
           <div class="line1">
            <div class="labelbox">
                    <table>
                      <tr>
                        <td>ABG</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TIME/FIO<sub>2</sub></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>HB/PCV</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>PH</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>PACO<sub>2</sub></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>PAO<sub>3</sub></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>HCO<sub>2</sub></td>
                        <td></td>
                        <td></td>
                        <td></td>    
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>BE</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr> 
                      <tr>
                        <td>SAO<sub>2</sub></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Na/K+/Ca+</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Lactate</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     </tr>
                    </table>    
                    </div>           
        </div>
    <div class="form-container">
        <div class="form-heading">
            <h3>POST OPERATIVE INSTRUCTION</h3>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="name">
                    <p> <ul class="postoperativelist">
                        <li>Transfer to Recovery</li>
                        <li>Monitorig</li>
                        <li>Continuous ECG Monitorig</li>
                        <li>Continuous Pluse Oximetry</li>
                        <li>BP Every 15 minutes</li>
                        <li>Sedation Scores every 15 minutes</li>
                        <li>Pain Score every 15 minutes</li>
                        </ul>
                    </p>
                </div>
                <div class="vl"></div>
                <div class="directtrnasfer">
                    <p><ul class="postoperativelist">
                        <li>Direct Transfer to ICU</li>
                        <li>Indication :</li>
                        <li>Continuous at Transfer :</li>
                        <li>BP :  Pluse:   SPO<sub>2</sub></li>
                        <li>Resp :  SV/IPPV</li>
                        <li>Infusion</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="form-heading">
                <h3>POST OPERATIVE INSTRUCTION</h3>
            </div>
            <div class="line1">
                <div class="Oxygen">
                    <p>Oxygen : Favce / Nasel @.......................Litres / Min in recovery /Ward For .........................Hours
                        N.P.O.Till.....................................
                    </p>
                </div>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Analgesia :............................................................................
                </p>
            </div>
        </div>

        <div class="line1">
            <div class="sonof">
                <p>
                    I.V. Fluid :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Other Medications  :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    DVT Prophy Lexis :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Any other instructions :............................................................................
                </p>
            </div>
        </div>
        
        </div>
</div>

    );
};


export default Post_instruction;
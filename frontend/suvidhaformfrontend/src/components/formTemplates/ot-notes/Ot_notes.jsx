import React from 'react';
import "./Ot_nots.css";
const Ot_notes = () => {
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
            <h3>OT NOTES</h3>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="name">
                    <p>Name of Patient :.......................................................</p>
                </div>
                <div class="sex">
                    <p>Age/Sex :..............................................</p>
                </div>
            </div>
            <div class="line1">
                <div class="ipd">
                    <p>IPD No :.........................................</p>
                </div>
                <div class="mr">
                    <p>MR No. :..........................</p>
                </div>
                <div class="bed">
                    <p>Bed No. :.........................</p>
                </div>
            </div>
           <div class="outline">
            <table>
                <tr>
                  <th rowspan="2">O.T.</th>
                  <th rowspan="2">Type Of Anaesthesia</th>
                  <th colspan="2">Surgery</th>
                  <th rowspan="2"></th>
                </tr>
                <tr>
                  <td>Start Time</td>
                  <td>Finish Time</td>
                </tr>
                <tr>
                    <td>OT(1)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Nitrous</td>
                  </tr>
                  <tr>
                    <td>OT(2)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Images</td>
                  </tr>
                  <tr>
                    <td>Labour Room</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Laparoscope</td>
                  </tr>
              </table>
              </div>
        <div class="line1">
            <div class="surgeon">
                <p>
                    Name Of Surgeon :................................
                </p>
            </div>
            <div class="assistant">
                <p>
                   Name Of Assistant :....................
                </p>
            </div>
            <div class="anaesthetist">
                <p>
                    Anaesthetist :..........................
                </p>
            </div>
        </div>

        <div class="line1">
            <div class="Medi">
                <p>
                  Pre-Operative Diagnosis :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Post-Operative Diagnosis :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Name Of Procedure Perfomed :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Pre Operative Findidng :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Step of procedure :............................................................................
                </p>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    Condition Of Patient Before Shifting to Ward  :............................................................................
                </p>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Ot_notes;

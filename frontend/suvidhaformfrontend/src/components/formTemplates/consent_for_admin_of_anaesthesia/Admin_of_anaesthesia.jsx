import React from 'react'
import "./Adminforanaesthesia.css";
const admin_anaesthesia = () => {
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
            <h3>CONSENT FORM FOR ADMINISTRATION OF ANAESTHESIA</h3>
        </div>
        <div class="form-details">
            <div class="line1">
                <div class="name">
                    <p>Name :.....................................</p>
                </div>
                <div class="sex">
                    <p>Sex:......................</p>
                </div>
                <div class="age">
                    <p>Age: ..................</p>
                </div>
            </div>
            <div class="line1">
                <div class="mr-no">
                    <p>MR No:...............................</p>
                </div>
                <div class="uhid">
                    <p>UHID No:..........................</p>
                </div>
                <div class="ipd">
                    <p>IPD No:..........................</p>
                </div>
                <div class="date">
                    <p>Date:.........................</p>
                </div>
            </div>
        </div>
        <div class="line1">
            <div class="sonof">
                <p>
                    S/O , D/O, W/O :
                    ...........................................................
                </p>
            </div>
        </div>
        <div class="para">
            <h4>Authorization for Administration of Anaesthesia</h4>
            <ol>
                <li>
                    I hereby authorize the above hospital and its staff to perform upon
                    the above patent the following surgical treatment under anaesthesia.
                </li>
                <li>
                    I consent to the administration of anaesthesia and to such
                    anaesthetics/sedativos / other drugs as may deemed necessary of
                    desirable.
                </li>
                <li>
                    The drugs which are given to produce anaesthesis and lessen pain may
                    cause drowsas or sleepiness or may numb a part of my body.
                </li>
                <li>
                    I know, must tell the doctors if I have had any other health problem
                    taking any medicines also must tell the doctor if have eaten or
                    taken alcohol since midnight.
                </li>

                <li>
                    It has been explained o me that during the course of the operation
                    procedure unforeseen conditions may be revealed or encountered which
                    necessitate surgical or other emergency procedures in addition to or
                    different from those contemplated at the time of the initial
                    diagnosis I, therefore further authorize above designated staff to
                    perform such additional surgical or other procedures as they deem
                    necessary or desirable.
                </li>
                <li>
                    I state that I am/am not suffering from
                    Hypertension/Diabetes/Bleeding disorder / heart disease or any known
                    allergy.
                </li>
                <li>
                    I further consent to the administration of anaesthetic drugs
                    infusion, blood product transfusions.
                </li>
                <li>
                    I have been given an opportunity to ask all any questions and I have
                    been given option to ask for second opinion.
                </li>
                <li>
                    I acknowledge that no guarantee and promise has been made to me
                    conceming the result of any procedure/ treatment.
                </li>
            </ol>
        </div>
        <div class="certify">
            <p>
                I CERTIFY THAT THE STATEMENT MADE IN THE ABOVE CONSENT FORM HAS BEEN
                READ OVER END EXPLINED TO ME IN MY MOTHER TONGUE AND I HAVE FULLY
                UNDERSTOOD THE MPLICATIONS OF THE ABOVE CONSENT
            </p>
        </div>
        <div class="sign">
            <div class="witness-name-sign">
                <p>Name & Signature of the witness</p>
                <p>--------------------------</p>
                <p>--------------------------</p>
            </div>
            <div class="patients-sign">
                <p>Signature of the patients /Parent/Gurdian</p>
                <p>Thumb Impression</p>
                <p>Name: ......................</p>
                <p>Relationship With Patients : ...................</p>
            </div>
        </div>
        <div class="cerify1">
            <p> I CONFIRM THAT I HAVE EXPLANIED THAT NATURE AND EFFECTS OF THE OPERATION/

                OCEDUE/THREATMENT TO THE PERSON WHO HAS SIGNED THE ABOVE CONSENT FORM
            </p>
        </div>
        <div class="sign-anaes">
            <p> Signature Of Anaesthetist</p>
             <p> Name : ---------------------</p>
        </div>
    </div>
    </div>
  );
};

export default admin_anaesthesia;
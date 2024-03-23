
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./components/home/Home"
import Hregister from './components/auth/Hregister';
import Hlogin from './components/auth/Hlogin';
import PrivateRoute from "./PrivateRoute"
// import Dashboard from "./components/hospital/Dashboard";
import FormManager from "./components/hospital/FormManager";
import PatientsRegistration from "./components/hospital/PatientsRegistration";
import Consent_for_treatment from "./components/formTemplates/consent_for_treatment/Consent_for_treatment";
import Hiv_test from "./components/formTemplates/hivTest/Hiv_test";
import Ot_notes from "./components/formTemplates/ot-notes/Ot_notes";
import Care_plan from "./components/formTemplates/careplan/Care_plan";
import Surgical_opration from "./components/formTemplates/con-form-for-surgilcal-operation/Surgical_operation";
import Admin_anaesthesia from "./components/formTemplates/consent_for_admin_of_anaesthesia/Admin_of_anaesthesia";
import Doctor_sheet from "./components/formTemplates/doctor-assesment-sheet-ed/Doctor_sheet_ed";
import Hiv_testing from "./components/formTemplates/hiv-pre-testing-info/Hiv_pre_testing";
import Nurse_sheet from "./components/formTemplates/nurse-assessment-sheet/Nurse_assesment_sheet";
import Nurse_admission from './components/formTemplates/nursing-admission-assesssment/Nurse_admission';
import Nursing_clinic from "./components/formTemplates/nursing_clinical_assesment/Nursing_clinic";
import Nutrition_screening from "./components/formTemplates/nutrition_screening_form/Nutrition_screening";
import Patient_feedback from './components/formTemplates/patient_feedback_form/Patient-feedback';
import Post_plan from "./components/formTemplates/post-opera-care-plan/Post_plan_care";
import Post_instraction from "./components/formTemplates/post-operative-instruction/Post_instruction";
import Pre_checkup from './components/formTemplates/pre-aneasthetic-checkup/Pre_checkup';
import Pre_checklist from './components/formTemplates/pre-operative-checklist/Pre_checklist';
import Anaesthetic_evalution from './components/formTemplates/anaesthetic-record-evalution/Anaesthetic_evalution';

// import Patients from './components/formTemplates/Patients';
import Formtest from "./components/formTemplates/Formtest"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Hregister />} />
          <Route path="/login" element={<Hlogin />} />
      

          {/* private route  */}

          <Route path="/hospital" element={<PrivateRoute />}>

            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="formManager" element={<FormManager />} />
            <Route path="patient" element={<PatientsRegistration />} />
            <Route path="forms/Consent" element={<Consent_for_treatment />} />
            <Route path="forms/hiv" element={<Hiv_test />} />
            <Route path="forms/otnote" element={<Ot_notes />} />
            <Route path="forms/care" element={<Care_plan />} />
            <Route path="forms/operation" element={<Surgical_opration />} />
            <Route path="forms/admin" element={<Admin_anaesthesia />} />
            <Route path="forms/doctorsheet" element={<Doctor_sheet />} />
            <Route path="forms/hivtesting" element={<Hiv_testing />} />
            <Route path="forms/nursesheet" element={<Nurse_sheet />} />
            <Route path="forms/nurseadmission" element={<Nurse_admission />} />
            <Route path="forms/nursingclinic" element={<Nursing_clinic />} />
            <Route path="forms/nutrition" element={<Nutrition_screening />} />
            <Route path="forms/patientfeedback" element={<Patient_feedback />} />
            <Route path="forms/postcareplan" element={<Post_plan />} />
            <Route path="forms/postinstraction" element={<Post_instraction />} />
            <Route path="forms/precheckup" element={<Pre_checkup />} />
            <Route path="forms/prechecklist" element={<Pre_checklist />} />
            <Route path="forms/anaestheticevalution" element={<Anaesthetic_evalution />} />
            <Route path="forms/Formtest" element={<Formtest />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

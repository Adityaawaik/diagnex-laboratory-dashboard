import React from "react";
import Sidebar from "./Sidebar";
import AllPatientContent from "./PatientForm/AllPatientContent";

import "../css_files/PatientForm.css";

const AddPatientForm = () => {
  return (
    <div className="full-patient-form-content">
      <Sidebar />
      <AllPatientContent />
    </div>
  );
};

export default AddPatientForm;

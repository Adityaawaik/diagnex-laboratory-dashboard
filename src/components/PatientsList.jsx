import React from "react";
import Sidebar from "./Sidebar";
import AllPatientContent from "./Patients/AllPatientContent";
import "../css_files/Patients.css";

const PatientsList = () => {
  return (
    <>
      <div className="patients-content-1">
        <Sidebar />
        <AllPatientContent />
      </div>
      <div className="patients-content-2">
        <Sidebar />
        <AllPatientContent />
      </div>
    </>
  );
};

export default PatientsList;

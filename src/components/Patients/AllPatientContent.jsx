import React from "react";
import PatientHeader from "./PatientHeader";
import EachPatientCard from "./EachPatientCard";

const AllPatientContent = () => {
  return (
    <div className="patient-full-content">
      <PatientHeader />
      <EachPatientCard />
    </div>
  );
};

export default AllPatientContent;

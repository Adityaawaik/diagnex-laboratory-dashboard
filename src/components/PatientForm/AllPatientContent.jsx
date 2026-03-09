import React from "react";
import FormHeader from "./FormHeader";
import PatientForm from "./PatientForm";

const AllPatientContent = () => {
  return (
    <div className="patient-form-content">
      <FormHeader />
      <PatientForm />
    </div>
  );
};

export default AllPatientContent;

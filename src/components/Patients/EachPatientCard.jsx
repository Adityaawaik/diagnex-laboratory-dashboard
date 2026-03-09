import React, { useContext } from "react";
import PatientCard from "./PatientCard";
import LabContext from "../../store/LabContext";

const EachPatientCard = () => {
  const { allPatients } = useContext(LabContext);
  return (
    <div className="patient-table-wrapper">
      <div className="patient-table">
        <div className="patient-col">
          <h3>Test Completed</h3>
          <h3>Name</h3>
          <h3>Age</h3>
          <h3>Gender</h3>
          <h3>Date</h3>
          <h3>Test</h3>
        </div>

        {allPatients.map((patient, index) => (
          <PatientCard patient={patient} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EachPatientCard;

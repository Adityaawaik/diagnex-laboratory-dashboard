import React from "react";
import { useState } from "react";

const PatientCard = ({ patient }) => {
  const [isTestCompleted, setIsTestCompleted] = useState("");

  const checkBox = (e) => {
    setIsTestCompleted(e.target.checked);
  };

  console.log(isTestCompleted);

  return (
    <div className={`patient-row ${isTestCompleted ? "isTestCompleted" : ""}`}>
      <input className="checkbox" onChange={checkBox} type="checkbox" />
      <p>{patient.patientFullname}</p>
      <p>{patient.patientAge}</p>
      <p>{patient.patientGender}</p>
      <p>{patient.patientDate}</p>
      <p>{patient.patientTest}</p>
    </div>
  );
};

export default PatientCard;

import React from "react";

import "../../css_files/dashboard.css";

const RecentActivePlayerCard = ({ patients }) => {
  return (
    <div className="patient-card">
      <div className="patient">
        <p className="patient-name">{patients.patientName}</p>
        <p className="patient-test">{patients.patientTest}</p>
        <p className="patient-time">{patients.testTime}</p>
        <p className={`${patients.isTestCompleted ? "pending" : "completed"} `}>
          {patients.isTestCompleted === false ? "Pending" : "Completed"}
        </p>
      </div>
    </div>
  );
};

export default RecentActivePlayerCard;

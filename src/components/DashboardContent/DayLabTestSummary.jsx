import React, { useContext } from "react";
import "../../css_files/dashboard.css";
import { IoPeople } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { GrNotes } from "react-icons/gr";
import LabContext from "../../store/LabContext";

const DayLabTestSummary = () => {
  const { allPatients } = useContext(LabContext);
  return (
    <div className="lab-test-summary">
      <div className="total-patients">
        <h2>Total Patients</h2>
        <div className="patient-num">
          <IoPeople className="patient-number" />
          <span>{allPatients.length}</span>
        </div>
      </div>

      <div className="today-test">
        <h2>Today Tests</h2>
        <div className="today-test-num">
          <CgNotes className="test-number" />
          <span>{allPatients.length}</span>
        </div>
      </div>

      <div className="pending-reports">
        <h2>Pending Tests</h2>
        <div className="pending-test-num">
          <GrNotes className="pending-test-number" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default DayLabTestSummary;

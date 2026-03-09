import React, { useContext, useState } from "react";
import LabContext from "../../store/LabContext";

const PatientHeader = () => {
  const [searchPatient, setSearchPatient] = useState("");
  const { searchPatientInfo } = useContext(LabContext);

  const handleSearchPatient = (e) => {
    setSearchPatient(e.target.value);
  };

  const getSearchInfo = () => {
    searchPatientInfo(searchPatient);
  };

  return (
    <header className="form-header">
      <div className="form-header-content">
        <h2>All Patients</h2>
      </div>
      <div className="input-area">
        <input
          onChange={handleSearchPatient}
          className="search-patient"
          type="text"
          name=""
          id=""
          value={searchPatient}
        />
        <button onClick={getSearchInfo} className="search-btn">
          Search
        </button>
      </div>
    </header>
  );
};

export default PatientHeader;

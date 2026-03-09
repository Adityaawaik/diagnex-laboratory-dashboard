import React, { useContext, useState } from "react";
import LabContext from "../../store/LabContext";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const { getPatientInformation } = useContext(LabContext);

  const [patientFullname, setPatientFullname] = useState("");

  const [patientAge, setPatientAge] = useState("");

  const [patientGender, setPatientGender] = useState("");

  const [patientDate, setPatientDate] = useState("");

  const [patientTest, setPatientTest] = useState("");

  const navigate = useNavigate();

  const handlePatientNameChange = (e) => {
    setPatientFullname(e.target.value);
  };

  const handlePatientAgeChange = (e) => {
    setPatientAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setPatientGender(e.target.value);
  };

  const handlePatientDateChange = (e) => {
    setPatientDate(e.target.value);
  };

  const handlePatientTestChange = (e) => {
    setPatientTest(e.target.value);
  };
  const addPatient = (e) => {
    e.preventDefault();
    if (
      patientFullname &&
      patientAge &&
      patientGender &&
      patientDate &&
      patientTest
    ) {
      getPatientInformation(
        patientFullname,
        patientAge,
        patientGender,
        patientDate,
        patientTest
      );
      navigate("/patient-list");
    }
  };
  return (
    <div className="patient-form">
      <div className="full-form">
        <form className="form-container">
          <h2>Add Patient</h2>
          <div className="form-group">
            <label for="fullname">Full Name</label>
            <input
              onChange={handlePatientNameChange}
              value={patientFullname}
              type="text"
              id="fullname"
              placeholder="Enter patient name"
              required
            />
          </div>

          <div className="form-group">
            <label for="age">Age</label>
            <input
              onChange={handlePatientAgeChange}
              value={patientAge}
              type="number"
              placeholder="Enter age"
              id="age"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              onChange={handleGenderChange}
              value={patientGender}
              required
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label for="date">Date</label>
            <input
              id="date"
              onChange={handlePatientDateChange}
              value={patientDate}
              type="date"
              placeholder="Enter age"
              required
            />
          </div>

          <div className="form-group">
            <label for="test">Test</label>
            <input
              id="number"
              onChange={handlePatientTestChange}
              value={patientTest}
              type="tel"
              placeholder="Like Blood test"
              required
            />
          </div>

          <button onClick={addPatient} type="submit" className="submit-btn">
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;

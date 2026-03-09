import React, { useEffect, useState } from "react";
import LabContext from "./LabContext";

const LabLogic = ({ children }) => {
  const [index, setIndex] = useState(0);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const patients = [
    {
      patientFullname: "awaik aditya narayan",
      patientAge: 25,
      patientGender: "male",
      patientDate: "2026-05-10",
      patientTest: "MRI scan",
    },
    {
      patientFullname: "John Vicky",
      patientAge: 21,
      patientGender: "male",
      patientDate: "2026-04-11",
      patientTest: "CT scan",
    },
    {
      patientFullname: "Vidhisha Jain",
      patientAge: 23,
      patientGender: "Female",
      patientDate: "2026-03-11",
      patientTest: "Blood test",
    },
    {
      patientFullname: "Nikita Patel",
      patientAge: 40,
      patientGender: "Female",
      patientDate: "2026-03-21",
      patientTest: "Urine Test",
    },
    {
      patientFullname: "Kashvi",
      patientAge: 24,
      patientGender: "Female",
      patientDate: "2026-04-29",
      patientTest: "Cardiograph",
    },
  ];

  const [allPatients, setAllPatients] = useState(() => {
    const savedPatients = localStorage.getItem("savedPatients");
    return savedPatients ? JSON.parse(savedPatients) : patients;
  });

  const [onlySearchPatient, setOnlySearchPatient] = useState(allPatients);

  const revenueData = [
    { day: "Monday", revenue: 1200 },
    { day: "Tuesday", revenue: 2100 },
    { day: "Wednesday", revenue: 1800 },
    { day: "Thursday", revenue: 2400 },
    { day: "Friday", revenue: 3200 },
    { day: "Saturday", revenue: 2800 },
    { day: "Sunday", revenue: 3500 },
  ];

  const recentActivePatients = [
    {
      patientName: "John",
      patientTest: "blood test",
      isTestCompleted: true,
      testTime: "2min ago",
    },
    {
      patientName: "Samson",
      patientTest: "MRI",
      isTestCompleted: false,
      testTime: "20min ago",
    },
    {
      patientName: "Nick",
      patientTest: "X-Ray",
      isTestCompleted: true,
      testTime: "20min ago",
    },
  ];
  const currentRevenue = revenueData[index];

  const nextDay = () => {
    if (index < revenueData.length - 1) {
      setIndex(index + 1);
    }
  };

  const previousDay = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const getPatientInformation = (
    patientFullname,
    patientAge,
    patientGender,
    patientDate,
    patientTest
  ) => {
    const newPatients = [
      {
        patientFullname,
        patientAge,
        patientGender,
        patientDate,
        patientTest,
      },
      ...allPatients,
    ];

    setAllPatients(newPatients);
    setOnlySearchPatient(newPatients);
  };

  const searchPatientInfo = (patientName) => {
    if (patientName.trim() === "") {
      setOnlySearchPatient(allPatients);
    } else {
      const patientInfo = allPatients.filter((pat) =>
        pat.patientFullname.toLowerCase().includes(patientName.toLowerCase())
      );

      setOnlySearchPatient(patientInfo);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedPatients", JSON.stringify(allPatients));
  }, [allPatients]);
  return (
    <LabContext.Provider
      value={{
        revenueData,
        index,
        nextDay,
        previousDay,
        currentRevenue,
        recentActivePatients,
        allPatients: onlySearchPatient,
        toggleBurgerMenu,
        isBurgerMenuOpen,
        setIsBurgerMenuOpen,
        getPatientInformation,
        searchPatientInfo,
      }}
    >
      {children}
    </LabContext.Provider>
  );
};

export default LabLogic;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import LabLogic from "./store/LabLogic.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PatientsList from "./components/PatientsList.jsx";
import AddPatientForm from "./components/AddPatientForm.jsx";

const router = createHashRouter([
  { path: "/", element: <Navigate to="/dashboard" /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/patient-list", element: <PatientsList /> },
  { path: "/add-patient", element: <AddPatientForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LabLogic>
      <RouterProvider router={router} />
    </LabLogic>
  </StrictMode>
);

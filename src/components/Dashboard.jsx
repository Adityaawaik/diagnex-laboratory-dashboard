import React from "react";
import Sidebar from "./Sidebar";
import AllDashboardContent from "./DashboardContent/AllDashboardContent";
import "../css_files/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="full-dashboard-content-1">
        <Sidebar />
        <AllDashboardContent />
      </div>
      <div className="full-dashboard-content-2">
        <Sidebar />
        <AllDashboardContent />
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import Header from "./Header";
import DayLabTestSummary from "./DayLabTestSummary";
import RevenuePerDay from "./RevenuePerDay";
import RecentActivity from "./RecentActivity";

const AllDashboardContent = () => {
  return (
    <div className="dashboard-all-content">
      <Header />
      <DayLabTestSummary />
      <RevenuePerDay />
      <RecentActivity />
    </div>
  );
};

export default AllDashboardContent;

import React, { useContext } from "react";

import "../../css_files/dashboard.css";
import LabContext from "../../store/LabContext";
import RecentActivePlayerCard from "./RecentActivePlayerCard";

const RecentActivity = () => {
  const { recentActivePatients } = useContext(LabContext);
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>

      <div className="recent-active-patients">
        {recentActivePatients.map((patient, index) => (
          <RecentActivePlayerCard key={index} patients={patient} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

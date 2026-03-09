import React, { useContext } from "react";
import "../../css_files/dashboard.css";
import LabContext from "../../store/LabContext";

const RevenuePerDay = () => {
  const { currentRevenue, nextDay, previousDay, index, revenueData } =
    useContext(LabContext);

  return (
    <div className="revenue-per-day">
      <div className="revenue-card">
        <h3>Revenue Per Day</h3>

        <div className="price-card">
          <div className="card">
            <h3>{currentRevenue.day}</h3>
            <h3>Rs.{currentRevenue.revenue}</h3>

            <div className="button">
              <button onClick={previousDay} disabled={index === 0}>
                Previous
              </button>

              <button
                onClick={nextDay}
                disabled={index === revenueData.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePerDay;

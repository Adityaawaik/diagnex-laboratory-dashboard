import React from "react";
import { FaBell } from "react-icons/fa";
import "../../css_files/dashboard.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-side-content">
        <FaBell className="bell-icon" />
        <div className="profile-image">
          <img
            src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

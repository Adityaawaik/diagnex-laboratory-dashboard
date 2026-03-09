import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { BsFlask } from "react-icons/bs";
import { IoHomeOutline, IoPeopleOutline, IoMenu } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";

import LabContext from "../store/LabContext";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const { isBurgerMenuOpen, toggleBurgerMenu, setIsBurgerMenuOpen } =
    useContext(LabContext);

  return (
    <div className="sidebar-content">
      <header className="company-logo">
        <div className="logo">
          <BsFlask />
          <h1 className="brand">Diagnex</h1>
        </div>

        <button onClick={toggleBurgerMenu} className="menu-btn">
          {!isBurgerMenuOpen ? (
            <IoMenu className="menu-logo" />
          ) : (
            <IoMdClose className="close-logo" />
          )}
        </button>
      </header>
      <main>
        <div className="options">
          <div
            className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
            onClick={() => navigate("/dashboard")}
          >
            <span className="icon">
              <IoHomeOutline />
            </span>
            <h3>Dashboard</h3>
          </div>

          <div
            className={`menu-item ${isActive("/patient-list") ? "active" : ""}`}
            onClick={() => navigate("/patient-list")}
          >
            <span className="icon">
              <IoPeopleOutline />
            </span>
            <h3>Patients</h3>
          </div>

          <div
            className={`menu-item ${isActive("/add-patient") ? "active" : ""}`}
            onClick={() => navigate("/add-patient")}
          >
            <span className="icon">
              <FaRegPenToSquare />
            </span>
            <h3>Add Patient</h3>
          </div>
        </div>

        <div className={`opts ${isBurgerMenuOpen ? "" : "options-2"}`}>
          <div
            className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
            onClick={() => {
              navigate("/dashboard"), setIsBurgerMenuOpen(false);
            }}
          >
            <span className="icon">
              <IoHomeOutline />
            </span>
            <h3>Dashboard</h3>
          </div>

          <div
            className={`menu-item ${isActive("/patient-list") ? "active" : ""}`}
            onClick={() => {
              navigate("/patient-list"), setIsBurgerMenuOpen(false);
            }}
          >
            <span className="icon">
              <IoPeopleOutline />
            </span>
            <h3>Patients</h3>
          </div>

          <div
            className={`menu-item ${isActive("/add-patient") ? "active" : ""}`}
            onClick={() => {
              navigate("/add-patient"), setIsBurgerMenuOpen(false);
            }}
          >
            <span className="icon">
              <FaRegPenToSquare />
            </span>
            <h3>Add Patient</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;

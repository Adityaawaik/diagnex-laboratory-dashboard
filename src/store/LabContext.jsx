import { createContext } from "react";

const defaultContext = {
  revenueData: [],
  index: 0,
  nextDay: () => {},
  previousDay: () => {},
  currentRevenue: {},
  recentActivePatients: [],
  allPatients: [],

  toggleBurgerMenu: () => {},
  isBurgerMenuOpen: false,
  setIsBurgerMenuOpen: () => {},
  getPatientInformation: () => {},
  searchPatientInfo: () => {},
};

const LabContext = createContext(defaultContext);

export default LabContext;

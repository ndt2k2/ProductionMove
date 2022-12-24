import React from "react";
import Sidebar from "../Sidebar/sidebar";
import NavBar from "../../../../components/navbar/navbar";

import "./recallProductions.css";

const RecallProductions = () => {
  return (
    <div className="recallProductions">
      <Sidebar />
      <div className="wrapper">
        <NavBar />
        <div className="recallWrapper"></div>
      </div>
    </div>
  );
};

export default RecallProductions;

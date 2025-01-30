import React from "react";
import agenda from "../../img/agenda.png";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div 
      className="text-center text-white p-5 shadow-lg"
      style={{ background: "linear-gradient(135deg, #28a745, #218838)" }}
    >
      <p>
        <img src={agenda} alt="Agenda" className="img-fluid" />
      </p>
    </div>
  );
};

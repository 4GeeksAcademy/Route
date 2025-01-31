import React from "react";
import agenda from "../../img/agenda.png";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div 
      className="home">
      <p>
        <img src={agenda} alt="Agenda" className="img-fluid" />
      </p>
    </div>
  );
};

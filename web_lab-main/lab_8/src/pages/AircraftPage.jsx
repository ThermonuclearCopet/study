import React, { useState } from "react";
import "./AircraftPage.css";
import { aircrafts } from '../aircrafts.js';
import AircraftsSubheader from "../components/AircraftsSubheader/AircraftsSubheader.jsx";
import { useNavigate } from "react-router-dom";

const AircraftPage = () => {
  const [aircraftsList, setAircraftsList] = useState(aircrafts);
  const navigate = useNavigate();

  return (
    <div className="aircraft-page">
      <h1 className="aircraft-title">Aircraft Catalog</h1>

      <AircraftsSubheader onApply={(newAircraftsList) => {
        setAircraftsList(newAircraftsList);
      }} />

      <div className="aircraft-list">
        {aircraftsList.map((aircraft) => (
          <div className="aircraft-card" key={aircraft.id}>
            <img className="aircraft-card-image" src={aircraft.image} alt={aircraft.name} />
            <h2>{aircraft.name}</h2>
            <p>{aircraft.description}</p>
            <button className="aircraft-card-btn" onClick={() => {
              navigate(`/aircraft/${aircraft.id}`)
            }}>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AircraftPage;

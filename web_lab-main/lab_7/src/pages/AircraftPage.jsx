import React, { useState, useEffect } from "react";
import "./AircraftPage.css";

const AircraftPage = () => {
  const [aircrafts, setAircrafts] = useState([]);

  useEffect(() => {
    fetch("/data/aircraft.json")
      .then((res) => res.json())
      .then((data) => setAircrafts(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="aircraft-page">
      <h1>Aircraft Catalog</h1>
      <div className="aircraft-list">
        {aircrafts.map((aircraft) => (
          <div className="aircraft-card" key={aircraft.id}>
            <img src={aircraft.image} alt={aircraft.name} />
            <h2>{aircraft.name}</h2>
            <p>{aircraft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AircraftPage;

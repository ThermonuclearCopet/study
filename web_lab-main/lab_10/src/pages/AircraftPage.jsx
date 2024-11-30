import React, { useEffect, useState } from "react";
import "./AircraftPage.css";
import AircraftsSubheader from "../components/AircraftsSubheader/AircraftsSubheader.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";


const AircraftPage = () => {
  const [aircraftsList, setAircraftsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/aircrafts')
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);
        setAircraftsList(data);
      })
      .catch(() => {})
  }, [])

  return (
    isLoading ?
    <Spinner />
    :
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

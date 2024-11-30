import React, { useEffect, useState } from 'react';
import './TilesSection.css';

import ViewButton from '../../components/Buttons/View_Button';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

const TilesSection = () => {
  const [viewMoreStep, setViewMoreStep] = useState(1);
  const [aircrafts, setAircrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/aircrafts')
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);
        setAircrafts(data);
      })
      .catch(() => {})
  }, [])

  return (
    isLoading ?
    <section className="tiles-section">
      <Spinner />
    </section>
    :
    <>
      <section className="tiles-section">
        <div className="tiles-container">
          {aircrafts.slice(0, viewMoreStep * 3).map((tile) => (
            <div className="tile" key={tile.id}>
              <div className="tile-image">
                <img src={tile.image} alt={`Tile ${tile.id}`} />
              </div>
              <h2 className="tile-title">{tile.title}</h2>
              <p className="tile-description">{tile.description}</p>
            </div>
          ))}
        </div>
      </section>
      {
        aircrafts.length > viewMoreStep * 3 ?
        <div className='view-button-section'>
          <ViewButton onClick={() => { setViewMoreStep(viewMoreStep + 1) }}>View more</ViewButton>
        </div> : null
      }
    </>
  );
};

export default TilesSection;

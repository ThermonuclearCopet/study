import React, { useState } from 'react';
import './TilesSection.css';

import ViewButton from '../../components/Buttons/View_Button';
import { aircrafts } from '../../aircrafts';

const TilesSection = () => {
  const [viewMoreStep, setViewMoreStep] = useState(1);

  return (
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

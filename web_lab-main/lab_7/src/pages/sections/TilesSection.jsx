import React from 'react';
import './TilesSection.css';
import TilesSection_img from './TilesSection.png';

import ViewButton from '../../components/Buttons/View_Button';

const TilesSection = () => {
  const tilesData = [
    {
      id: 1,
      title: 'Tile 1 heading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat',
    },
    {
      id: 2,
      title: 'Tile 2 heading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat',
    },
    {
      id: 3,
      title: 'Tile 3 heading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat',
    },
  ];

  return (
    <section className="tiles-section">
      <div className="tiles-container">
        {tilesData.map((tile) => (
          <div className="tile" key={tile.id}>
            <div className="tile-image">
              <img src={TilesSection_img} alt={`Tile ${tile.id}`} />
            </div>
            <h2 className="tile-title">{tile.title}</h2>
            <p className="tile-description">{tile.description}</p>
            <ViewButton>View more</ViewButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TilesSection;

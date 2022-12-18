import React from 'react';
import ss from './spaceObjectsContainer.module.css';
import bgImage from '../../../assets/images/cosmosPage/bg.png';
import sun from '../../../assets/images/cosmosPage/stars/Sun.png';
import earth from '../../../assets/images/cosmosPage/planets/earth.png';
import littlePlanet from '../../../assets/images/cosmosPage/littlePlanets/littlePlanet.png';
import sputnik from '../../../assets/images/cosmosPage/satellites/sputnik.png';
import SpaceObject from '../spaceObject/SpaceObject.jsx';
export default function SpaceObjectsContainer() {
  return (
    <div
      className={ss.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={ss.half}>
        <SpaceObject
          ObjectImg={sun}
          ObjectName='Звезды'
          linkTo={'/cosmos/stars'}
        />
        <SpaceObject
          ObjectImg={littlePlanet}
          ObjectName='Карликовые планеты'
          isReversed={true}
          linkTo={'/cosmos/littlePlanets'}
        />
      </div>
      <div className={ss.half}>
        <SpaceObject
          ObjectImg={sputnik}
          ObjectName='Спутники'
          linkTo={'/cosmos/satellites'}
        />
        <SpaceObject
          ObjectImg={earth}
          ObjectName='Планеты'
          isReversed={true}
          linkTo={'/cosmos/planets'}
        />
      </div>
    </div>
  );
}

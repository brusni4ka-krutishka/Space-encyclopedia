import React from 'react';
import ss from './spaceObjectsContainer.module.css';
import bgImage from '../../../assets/images/cosmosPage/bg.png';
import sun from '../../../assets/images/cosmosPage/sun.png';
import earth from '../../../assets/images/cosmosPage/earth.png';
import littlePlanet from '../../../assets/images/cosmosPage/littlePlanet.png';
import sputnik from '../../../assets/images/cosmosPage/sputnik.png';
import SpaceObject from '../spaceObject/SpaceObject.jsx';
export default function SpaceObjectsContainer() {
  return (
    <div
      className={ss.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={ss.half}>
        <SpaceObject ObjectImg={sun} ObjectName='Звезды' />
        <SpaceObject
          ObjectImg={littlePlanet}
          ObjectName='Карликовые планеты'
          isReversed={true}
        />
      </div>
      <div className={ss.half}>
        <SpaceObject ObjectImg={sputnik} ObjectName='Спутники' />
        <SpaceObject ObjectImg={earth} ObjectName='Планеты' isReversed={true} />
      </div>
    </div>
  );
}

import React from 'react';
import SpecificSpaceObjectContainer from '../components/cosmosPageComponents/specificSpaceObjectsContainer/SpecificSpaceObjectsContainer.jsx';
import bg from '../assets/images/cosmosPage/bg.png';
import { satelliteSet } from '../data/Satellitesset.js';
export default function CosmosPageSatellites() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Спутники</h1>
      <SpecificSpaceObjectContainer objectsSet={satelliteSet} />
    </div>
  );
}

import React from 'react';
import SpecificSpaceObjectsContainer from '../components/cosmosPageComponents/specificSpaceObjectsContainer/SpecificSpaceObjectsContainer.jsx';
import bg from '../assets/images/cosmosPage/bg.png';
import { planetSet } from '../data/Planetset.js';
export default function CosmosPagePlanets() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Планеты</h1>
      <SpecificSpaceObjectsContainer objectsSet={planetSet} />
    </div>
  );
}

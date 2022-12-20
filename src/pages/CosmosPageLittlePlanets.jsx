import React from 'react';
import SpecificSpaceObjectContainer from '../components/cosmosPageComponents/specificSpaceObjectsContainer/SpecificSpaceObjectsContainer.jsx';
import bg from '../assets/images/cosmosPage/bg.png';
import { littlePlanetSet } from '../data/LittlePlanetsset.js';
export default function CosmosPageLittlePlanets() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Карликовые планеты</h1>
      <SpecificSpaceObjectContainer objectsSet={littlePlanetSet} />
    </div>
  );
}

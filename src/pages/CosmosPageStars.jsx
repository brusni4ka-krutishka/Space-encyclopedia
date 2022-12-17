import React from 'react';
import SpecificSpaceObjectContainer from '../components/cosmosPageComponents/specificSpaceObjectContainer/SpecificSpaceObjectsContainer.jsx';
import bg from '../assets/images/cosmosPage/bg.png';
import { starSet } from '../data/Starset.js';
export default function CosmosPageStars() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Звезды</h1>
      <SpecificSpaceObjectContainer objectsSet={starSet} />
    </div>
  );
}

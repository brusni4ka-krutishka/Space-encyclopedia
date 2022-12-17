import React from 'react';
import SpecificSpaceObjectContainer from '../components/cosmosPageComponents/specificSpaceObjectContainer/SpecificSpaceObjectContainer.jsx';
import bg from '../assets/images/cosmosPage/bg.png';
export default function CosmosPageStars() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Звезды</h1>
      <SpecificSpaceObjectContainer />
    </div>
  );
}

import React from 'react';
import ss from './specificSpaceObjectContainer.module.css';
import SpecificSpaceObject from '../specificSpaceObject/SpecificSpaceObject.jsx';
import sun from '../../../assets/images/cosmosPage/stars/Sun.png';
import zetaAft from '../../../assets/images/cosmosPage/stars/Zeta_aft.png';
import sirius from '../../../assets/images/cosmosPage/stars/Sirius.png';
import betelgeuse from '../../../assets/images/cosmosPage/stars/Betelgeuse.png';
import altair from '../../../assets/images/cosmosPage/stars/Altair.png';
import acrux from '../../../assets/images/cosmosPage/stars/Acrux.png';

export default function SpecificSpaceObjectContainer() {
  return (
    <div className={ss.container}>
      <SpecificSpaceObject img={sun} undertext={'Солнце'} />
      <SpecificSpaceObject img={sirius} undertext={'Сириус'} />
      <SpecificSpaceObject img={betelgeuse} undertext={'Бетельгейзе'} />
      <SpecificSpaceObject img={zetaAft} undertext={'Дзета кормы'} />
      <SpecificSpaceObject img={altair} undertext={'Альтаир'} />
      <SpecificSpaceObject img={acrux} undertext={'Акрукс'} />
    </div>
  );
}

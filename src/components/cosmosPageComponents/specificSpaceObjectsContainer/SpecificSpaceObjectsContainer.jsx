import React from 'react';
import ss from './specificSpaceObjectsContainer.module.css';
import SpecificSpaceObject from '../specificSpaceObject/SpecificSpaceObject.jsx';

export default function SpecificSpaceObjectsContainer({ objectsSet }) {
  return (
    <div className={ss.container}>
      {objectsSet.map((object) => (
        <SpecificSpaceObject
          img={object.img}
          undertext={object.undertext}
          key={object.img}
        />
      ))}
    </div>
  );
}

import React from 'react';
import ss from './SpaceObjectsPhotoContainer.module.css';
import SpecificSpaceObject from '../SpaceObjectsPhotoContainer/SpaceObjectsPhotoContainer.jsx';

export default function SpaceObjectsPhotoContainer({ objectsSet }) {
  return (
    <div className={ss.container}>
      {objectsSet.map((object) => (
        <SpecificSpaceObject
          img={object.img}
          undertext={object.undertext}
          key={object.img}
          fact={object.fact}
          description={object.description}
          characteristicsList={object.characteristicsList}
          intrestingFactsList={object.intrestingFactsList}
        />
      ))}
    </div>
  );
}

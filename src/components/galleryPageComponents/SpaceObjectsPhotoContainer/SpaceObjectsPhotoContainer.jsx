import React from 'react';
import ss from './SpaceObjectsPhotoContainer.module.css';
import SpaceObjectPhoto from '../SpaceObjectPhoto/SpaceObjectPhoto.jsx';

export default function SpaceObjectsPhotoContainer({ objectsSet }) {
  return (
    <div className={ss.container}>
      {objectsSet.map((object) => (
        <SpaceObjectPhoto
          img={object.img}
          undertext={object.undertext}
          key={object.img}
        />
      ))}
    </div>
  );
}

import React from 'react';
import ss from './specificSpaceObject.module.css';

export default function SpecificSpaceObject({
  img,
  undertext,
  alt = 'Space Object',
}) {
  return (
    <div className={ss.object_container}>
      <img src={img} alt={alt} />
      <h2>{undertext}</h2>
    </div>
  );
}

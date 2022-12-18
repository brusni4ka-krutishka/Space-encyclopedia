import React from 'react';
import ss from './modalGallery.module.css';
export default function ModalGallery({
  objectName,
  img,

  closeCallback,
}) {
  return (
    <div
      id={ss.container}
      onClick={(e) => {
        if (e.target.id === ss.container) {
          closeCallback(false);
        }
      }}
    >
      <div id={ss.modal}>
        <img src={img} alt='photo' />
        <h2 className={ss.object_name}>{objectName}</h2>
      </div>
    </div>
  );
}

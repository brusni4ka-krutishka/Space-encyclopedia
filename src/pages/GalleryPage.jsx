import React from 'react';
import SpaceObjectsPhotoContainer from '../components/galleryPageComponents/SpaceObjectsPhotoContainer/SpaceObjectsPhotoContainer.jsx';
import { GallerySet } from '../data/Galleryset.js';
import bg from '../assets/images/galleryPage/bg.png';
export default function GalleryPage() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1 style={{ textAlign: 'center' }}>Галерея</h1>
      <SpaceObjectsPhotoContainer objectsSet={GallerySet} />
    </div>
  );
}

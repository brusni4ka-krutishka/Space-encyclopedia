import React from 'react';
import SpaceObjectsPhotoContainer from '../components/galleryPageComponents/SpaceObjectsPhotoContainer/SpaceObjectsPhotoContainer.jsx';
import { GallerySet } from '../data/Galleryset.js';

export default function GalleryPage() {
  return <SpaceObjectsPhotoContainer objectsSet={GallerySet} />;
}

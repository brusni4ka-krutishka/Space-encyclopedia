import React from 'react';
import ss from './imageBlock.module.css';

export default function ImageBlock({ pathToImage, alt = 'cosmic objects' }) {
  return <img className={ss.half_of_container} src={pathToImage} alt={alt} />;
}

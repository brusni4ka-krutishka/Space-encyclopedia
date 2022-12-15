import React from 'react';
import ss from './textAndImage.module.css';
import ImageBlock from '../../mainPageComponents/ImageBlock/ImageBlock.jsx';
import TextWithButton from '../../mainPageComponents/TextWithButton/TextWithButton.jsx';

export default function TextAndImage({
  textBackgroundImage,
  head,
  body,
  pathToImage,
  pathToPage,
  isReversed = false,
}) {
  return (
    <div
      className={ss.container}
      style={{ flexDirection: isReversed ? 'row' : 'row-reverse' }}
    >
      <TextWithButton
        textBackgroundImage={textBackgroundImage}
        head={head}
        body={body}
        pathToPage={pathToPage}
      ></TextWithButton>
      <ImageBlock pathToImage={pathToImage} />
    </div>
  );
}

import React from 'react';
import ss from './textWithButton.module.css';
import { Link } from 'react-router-dom';
export default function TextWithButton({
  textBackgroundImage,
  head,
  body,
  pathToPage,
}) {
  return (
    <div
      className={ss.half_of_container}
      style={{ backgroundImage: `url(${textBackgroundImage})` }}
    >
      <div className={ss.text_container}>
        <h1>{head}</h1>
        <p> {body}</p>
      </div>

      <div className={ss.btn_container}>
        <Link to={pathToPage}>Подробнее</Link>
      </div>
    </div>
  );
}

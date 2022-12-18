import React from 'react';
import ss from './modalSpaceObjects.module.css';
import sun from '../../assets/images/cosmosPage/stars/Sun.png';
export default function ModalSpaceObjects() {
  return (
    <div className={ss.container}>
      <div id={ss.modal}>
        <h1 className={ss.modal_header}>Седна</h1>
        <div className={ss.modal_body}>
          <div className={ss.img_and_text}>
            <img className={ss.modal_body_left_img} src={sun} />
            <div className={ss.modal_body_right_text}>
              Здесь будет охуенный текст-описание планеты Здесь будет охуенный
            </div>
          </div>
          <div className={ss.modal_body_bottom_text}>
            Здесь будет охуенный текст-описание планеты Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quae consectetur veniam
            necessitatibus impedit numquam unde dolore iste accusamus maxime
            eius soluta id, magni, dolorum modi! Eveniet enim cupiditate nemo
            soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta. Здесь будет охуенный текст-описание планеты Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quae consectetur
            veniam necessitatibus impedit numquam unde dolore iste accusamus
            maxime eius soluta id, magni, dolorum modi! Eveniet enim cupiditate
            nemo soluta.
            <ul className={ss.list}>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
              <li>List-item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

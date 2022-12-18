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
              <h3 className={ss.right_text_head}> Заголовок</h3>
              <div className={ss.right_text_body}>
                <p className={ss.key}>Диаметр</p>
                <p className={ss.value}>120 536 км</p>
              </div>
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
            <h2>Сведения и факты о небесном теле</h2>
            <div className={ss.list}>
              <div className={ss.list_item_num}>1</div>
              <div className={ss.list_item_text}>Lfksjdlkfjlk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

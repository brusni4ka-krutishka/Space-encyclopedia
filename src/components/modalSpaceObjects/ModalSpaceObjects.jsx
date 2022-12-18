import React from 'react';
import ss from './modalSpaceObjects.module.css';
export default function ModalSpaceObjects({
  objectName,
  img,
  fact,
  characteristicsList = [],
  description,
  intrestingFactsList = [],
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
        <h1 className={ss.modal_header}>{objectName}</h1>
        <div className={ss.modal_body}>
          <div className={ss.img_and_text}>
            <img className={ss.modal_body_left_img} src={img} alt={'obj'} />
            <div className={ss.modal_body_right_text}>
              <h3 className={ss.right_text_head}>{fact}</h3>
              <div className={ss.right_text_body}>
                {characteristicsList.map((item) => {
                  return (
                    <>
                      <p className={ss.key}>{item['key']}</p>
                      <p className={ss.value}>{item['value']}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={ss.modal_body_bottom_text}>
            {description}
            <h2>Сведения и факты о небесном теле</h2>
            <div className={ss.list}>
              {intrestingFactsList.map((item, i) => {
                return (
                  <>
                    <div className={ss.list_item_num}>{i + 1}</div>
                    <div className={ss.list_item_text}>{item}</div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

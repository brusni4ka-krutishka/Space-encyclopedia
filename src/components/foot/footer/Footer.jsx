import React from 'react';
import ss from './footer.module.css';
import instIcon from '../../../assets/images/socials/inst.svg';
import fbIcon from '../../../assets/images/socials/facebook.svg';
import vkIcon from '../../../assets/images/socials/vk.svg';
export default function Footer() {
  return (
    <div className={ss.container}>
      <div className={ss.site_name}>
        <h1>Space Encyclopedia</h1>
      </div>
      <div className={ss.contacts}>
        <h2 className={ss.contacts__h}>Контакты</h2>
        <h4 className={ss.contact}>+375 (25) 687-12-45 (life:)</h4>
        <h4 className={ss.contact}>+375 (33) 377-10-97 (МТС)</h4>
      </div>
      <div className={ss.adress_and_socs}>
        <div className={ss.adress}>
          <h3 className={ss.our_adress}>Наш адрес:</h3>
          <h4 className={ss.adress_field}>улица Звездная, 12</h4>
        </div>
        <div className={ss.socs_container}>
          <h3>Мы в соц. сетях:</h3>
          <div className={ss.soc_name_container}>
            <img src={instIcon} alt='inst ico' />
            <img src={fbIcon} alt='fb ico' />
            <img src={vkIcon} alt='vk ico' />
          </div>
        </div>
      </div>
    </div>
  );
}

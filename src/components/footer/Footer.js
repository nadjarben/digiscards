import React from 'react';
import { useTranslation } from 'react-i18next'

import logo from '../../assets/images/icons/logo-sidewalk-white.png'
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation("homepage");
  return (
    <footer className="footer">
      <div>
        <div className="footer__text text-center">
          {t('A product')}
          <a href="https://sidewalk.agency/">
          <img className="footer__logo ml-2 mr-2" src={logo} alt="logo-sidewalk" />
          </a>
          {t('Medias marketing and development agency')}
        </div>
      </div>
    </footer>
  )
}

export default Footer;

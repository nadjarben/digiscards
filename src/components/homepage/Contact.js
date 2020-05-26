import React from 'react'
import { useTranslation } from 'react-i18next'
import ModalContact from './ModalContact';

const Contact = () => {
  const { t } = useTranslation("homepage");
  return (
    <div className="contact">
      <h2 className="contact__title">{t('contact-title-1')} <span className="colored">{t('contact-title-2')}</span></h2>
      <p className="contact__paragraph">{t('contact-text')}</p>
        <ModalContact />
    </div>
  )
}

export default Contact;

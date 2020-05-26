import React from 'react';
import { useTranslation } from 'react-i18next'
import logo from '../../public/static/images/logo-sidewalk-white.png'
import { Link } from '../digital-card/../../18n'


const AddToHome = () => {
    const { t } = useTranslation("homepage");
    return (
        <div>
            <Link to="/">
            {t('Get yout own DigisCards')}
            <br/>
            {t('A product')}
            <img className="pl-1 pr-1" src={logo} alt="logo sidewalk" style={{width:'80px', paddingBottom:'0.5vh'}} />
            {t('Medias marketing and development agency')}
            </Link>
        </div>
    )
}

export default AddToHome;

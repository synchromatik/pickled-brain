import React from 'react'
import { useTranslation } from 'react-i18next';

function Info(props) {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('contactPage.header')}</h1>
            <p>{t('contactPage.subheader')}</p>
            <h2>{t('contactPage.info')}:</h2>
            <h3>{t('contactPage.studioName')}</h3>
            <p>{t('contactPage.phone')}: + 381 63 8979099 </p>
            <p>{t('contactPage.email')} : studio pickled-brain.com</p>
            <p>{t('contactPage.adress')}: Pariska 13, 11000 Belgrade, Serbia</p>
            <h2>{t('contactPage.hours')}:</h2>
            <p>{t('contactPage.weekdays')}</p>
            <p>{t('contactPage.weekends')}</p>
        </div>
    )
}

export default Info
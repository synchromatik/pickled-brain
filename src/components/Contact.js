import React from 'react'
import ContactForm from '../components/ContactForm'
import Info from './Info'
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';

const Contact = () => {
    const { t } = useTranslation()
    return (
        <div className="contact">
            <div>
                <LangSwitcher />
                <Info t={t}/>
            </div>
            <div>
                <ContactForm t={t}/>
            </div>
        </div>
    )
}

export default Contact
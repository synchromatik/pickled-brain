import React from 'react'
import ContactForm from '../components/ContactForm'
import Info from './Info'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation()
    return (
        <div className="contact">
            <Info t={t} />
            <ContactForm t={t} />
        </div>
    )
}

export default Contact
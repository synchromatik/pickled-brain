import React from 'react'
import ContactForm from '../components/ContactForm'
import Info from './Info'
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';

const Contact = () => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <contact>
                <info>
                    <LangSwitcher />
                    <Info t={t}/>
                </info>
                <form>
                    <ContactForm t={t}/>
                </form>
            </contact>
        </React.Fragment>
    )
}

export default Contact
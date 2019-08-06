import React from 'react'
import useInput from './useInput'
import { useTranslation } from 'react-i18next';
import axios from "axios"

function ContactForm(props) {
    const { value: name, bind: bindName, reset: resetName } = useInput('')
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('')
    const { t } = useTranslation()
    
    const handleSubmit = (evt) => {
        evt.preventDefault()

        console.log(`Submitting Name ${name} ${email} ${message}`)

        let data = JSON.stringify({
            name: name,
            email: email,
            message: message
        })

        axios.post('http://localhost:3001/email', data, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })

        resetName()
        resetEmail()
        resetMessage()
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {t('contactForm.name')}:
                <input type="text" placeholder={t('contactForm.name')} {...bindName} />
                </label>
                <label>
                    Email:
                <input type="text" placeholder={t('contactForm.email')} {...bindEmail} />
                </label>
                <label>
                    {t('contactForm.messageLabel')}:
                <input type="text" placeholder={t('contactForm.message')} {...bindMessage} />
                </label>
                <input type="submit" value={t('contactForm.send')} />
            </form>

        </div>
    );
}

export default ContactForm
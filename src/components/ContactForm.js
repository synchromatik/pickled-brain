import React, { useState } from 'react'
import useInput from './useInput'
import { useTranslation } from 'react-i18next';
import axios from "axios"

function ContactForm(props) {
    // Input hooks - useInput hooks
    const { value: name, bind: bindName, reset: resetName } = useInput('')
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('')

    // Status of form message local hooks
    const [status, setStatus] = useState({ error: false, message: null, success: null})

    // Translations
    const { t } = useTranslation()
    
    // Submiting form
    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (process.env.NODE_ENV === 'development') {
            console.log(`Submitting Name ${name} ${email} ${message}`)
        }

        let data = JSON.stringify({
            name: name,
            email: email,
            message: message
        })

        axios
            .post(process.env.REACT_APP_NODEJS_BACKEND, data, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then (response => {
                if (process.env.NODE_ENV === 'development') {
                    console.log(response)
                }
                // if html5 validation fails
                if (response.data.message === `'from' parameter is not a valid address. please check documentation`) {
                    setStatus({ error: true, message: t('contactForm.errorMessage') })
                } else if (response.data === 'Poruka poslata') {
                    setStatus({ error: false, message: null, success: true })
                    resetName()
                    resetEmail()
                    resetMessage()
                }
            })
            .catch(err => {
                    if (process.env.NODE_ENV === 'development') {
                        console.log(err)
                    }
                }
            );
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {status.error ? <p> {status.message}</p> : null}
                {status.success ? <p> uspesno poslata poruka </p> : null}
                <label>
                    {t('contactForm.name')}:
                <input type="text" name="name" placeholder={t('contactForm.name')} {...bindName} required/>
                </label>
                <label>
                    Email:
                <input type="email" name="email" placeholder={t('contactForm.email')} {...bindEmail} required/>
                </label>
                <label>
                    {t('contactForm.messageLabel')}:
                <input type="text" placeholder={t('contactForm.message')} {...bindMessage} required/>
                </label>
                <input type="submit" value={t('contactForm.send')} />
            </form>

        </div>
    );
}

export default ContactForm
import React, { useState } from 'react'
import useInput from './useInput'
import StyledLoading from './Loading'
import { useTranslation } from 'react-i18next';
import axios from "axios"

function ContactForm(props) {
    // Input hooks - useInput hooks
    const { value: name, bind: bindName, reset: resetName } = useInput('')
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('')

    // Status of form message local hooks
    const [status, setStatus] = useState({ error: false, message: null, success: null, isSending: false})

    // Translations
    const { t } = useTranslation()
    
    // Submiting form
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setStatus({ isSending: true })

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
                    setStatus({ error: true, message: t('contactForm.errorMessage'), isSending: false } )
                } else if (response.data === 'Poruka poslata') {
                    setStatus({ error: false, message: null, success: true, isSending:false })
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
        <div className="contact__form">
            <form onSubmit={handleSubmit}>
                {status.isSending ? <p> saljem </p> : null}
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
                    <textarea rows="4" cols="50" placeholder={t('contactForm.message')} {...bindMessage} required>
                    </textarea>
                {/* <input type="text" placeholder={t('contactForm.message')} {...bindMessage} required/> */}
                </label>
                <button 
                    type="submit"
                    disabled={status.isSending}
                >
                    {status.isSending ? <StyledLoading /> : t('contactForm.send') }
                </button>
                
            </form>

        </div>
    );
}

export default ContactForm
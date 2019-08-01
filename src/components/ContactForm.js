import React from 'react'
import useInput from './useInput'
import { useTranslation } from 'react-i18next';

function ContactForm(props) {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
    const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');
    const { t } = useTranslation()
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name} ${email} ${message}`);
        resetName();
        resetEmail();
        resetMessage();
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
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default ContactForm
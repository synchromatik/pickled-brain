import React from 'react'
import { useStateValue } from '../state'
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
    const [{lang}, dispatch] = useStateValue()
    const { i18n } = useTranslation()
    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    };

    return (
        <div>
            {lang}
            <button 
                onClick={() => changeLanguage('sr')}
            >
                sr change lang
            </button>
            <button 
                onClick={() => changeLanguage('en')}
            >
                en change lang
            </button>
            <button
                onClick={() => dispatch({
                    type: 'updateLang',
                    newLang: 'sr'
                })}
            >
                sr dispatch to global state
            </button>
            <button 
                onClick={() => dispatch({
                    type: 'updateLang',
                    newLang: 'en'
                })}
            >
                en dispatch to global state
            </button>
        </div>
    )
}

export default LangSwitcher
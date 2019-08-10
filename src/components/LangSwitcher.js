import React, {useEffect} from 'react'
import { useStateValue } from '../state'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
    const [{lang}, dispatch] = useStateValue()
    const { i18n } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(lang)
    
        if (process.env.NODE_ENV === 'development') {
            console.log(`Global state and lang changed to ${lang}`)
        }
       
    }, [i18n, lang])
    return (
        <header className="header">
            <div className="nav">
                <div 
                    className={lang === 'en' ? 'nav__switcher en-active' : 'nav__switcher sr-active'}
                    onClick={() => dispatch({
                        type: 'updateLang',
                        newLang: lang === 'en' ? 'sr' : 'en'
                    })}
                >

                </div>
            </div>
        </header>
    )
}

export default LangSwitcher
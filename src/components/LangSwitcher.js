import React, {useState, useEffect} from 'react'
import { useStateValue } from '../state'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
    const [{lang}, dispatch] = useStateValue()
    const [isTop, setTop] = useState(true)
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(lang)
    
        if (process.env.NODE_ENV === 'development') {
            console.log(`Global state and lang changed to ${lang}`)
            console.log(window.scrollY)
        }

        document.addEventListener('scroll', () => {
            const isTopWindow = window.scrollY < 100
            if (isTopWindow !== isTop) {
                setTop(false)
            } else if (window.scrollY === 0) {
                setTop(true)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n, lang])

    return (
        <header className="header">
            <div className={isTop ? 'nav' : 'nav nav--scrolling'}>
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
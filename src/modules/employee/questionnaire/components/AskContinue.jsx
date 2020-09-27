import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// reactstrap components
import { Button } from 'reactstrap';


const AskContinue = ({ onExit, onContinue, title }) => {

    const { t } = useTranslation()

    return (
        <>
            <div>
                <h1 className="h2"> {t(title)}</h1>
                <div className="pb-5" />
                <Button onClick={onContinue}>{t('Suivant')}</Button>
            </div>
        </>
    )
}


export default AskContinue

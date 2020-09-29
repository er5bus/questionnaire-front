import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// reactstrap components
import { Button } from 'reactstrap';

const AskContinue = ({ onExit, onContinue, title }) => {

    const { t } = useTranslation()

    return (
        <>
            <div className="continue-text">
                <span > {t(title)}</span>
                <div className="pb-5" />
                <Button className="nextButton next-button" onClick={onContinue}>{t('Suivant')}</Button>
            </div>
        </>
    )
}


export default AskContinue

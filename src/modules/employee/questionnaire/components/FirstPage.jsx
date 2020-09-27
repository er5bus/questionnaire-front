import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// reactstrap components
import { Button } from 'reactstrap';


const FirstQuestion = ({ onExit, onContinue }) => {

  const { t } = useTranslation()
  const onExist = () => {

  }
  return (
    <>
      <div>
        <h1 className="h2"> {t('Votre corps vous fait-il souffrir?')}</h1>

        <div className="pb-5" />
        <Button onClick={onContinue}>{t('Oui')}</Button>
        <Button onClick={onExit}>{t('Non')}</Button>
      </div>
    </>
  )
}


export default FirstQuestion

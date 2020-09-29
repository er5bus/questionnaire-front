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

        <div className="pt-5" style = {{
          display:"flex"
        }} >
        <Button onClick={onContinue} className="next-button">{t('Oui')}</Button>
        <Button onClick={onExit} className="nope-button">{t('Non')}</Button>
         </div>
        
       
      </div>
    </>
  )
}


export default FirstQuestion

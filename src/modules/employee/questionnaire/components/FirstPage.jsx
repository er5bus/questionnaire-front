import React from 'react'
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// reactstrap components
import { Button } from 'reactstrap'

const FirstQuestion = ({ onExit, onContinue }) => {

  const { t } = useTranslation()

  return (
    <>
      <div>
        <h1 className="h2"> { t('Do you have any pain ?') }</h1>

        <div className="pb-5" />
        <Button onClick={onContinue}>{ t('Yes') }</Button>
        <Button onClick={onExit}>{ t('No') }</Button>
      </div>
    </>
  )
}


export default FirstQuestion

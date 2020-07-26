import React from 'react'
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import thanksImg from './../../../../assets/img/deal.svg'

const ExitQuestions = () => {

  const { t } = useTranslation()

  return (
    <div className="text-left">
      <img width="200" src={thanksImg} alt="..." />
      <h1 className="h3 pt-4 mb-0"> { t('Thank you for your time') }</h1>
    </div>
  )
}


export default ExitQuestions

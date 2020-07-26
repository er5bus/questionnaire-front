import React from 'react'
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// reactstrap components
import { Button, Row, Col } from 'reactstrap'

import HumanBodyFrontSide from './HumanBodyFrontSide'
import HumanBodyBackSide from './HumanBodyBackSide'


const FirstQuestion = ({ onExit, onContinue }) => {

  const { t } = useTranslation()

  return (
    <>
      <div>
        <h1 className="h2"> { t('Select Your Pain Spot') }</h1>

        <Row>
          <Col lg="6">
            <HumanBodyFrontSide />
          </Col>
          <Col lg="6">
            <HumanBodyBackSide />
          </Col>
        </Row>

        <div className="pb-5" />
        <h1 className="h4 pb-2"> { t('Do You Want To Continue ?') } </h1>
        <Button onClick={onContinue}>{ t('Yes') }</Button>
        <Button onClick={onExit}>{ t('No') }</Button>
      </div>
    </>
  )
}


export default FirstQuestion

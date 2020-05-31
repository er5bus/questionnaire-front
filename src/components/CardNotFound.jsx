import React from "react"
import { useTranslation } from "react-i18next"

import { Card, CardBody, Col } from "reactstrap"

import emptyIcon from "./../assets/img/empty.png"


const CardNotFound = () => {
  const { t } = useTranslation()

  return (
    <Col lg="4">
      <Card className="card-lift--hover shadow">
        <CardBody className="py-4 text-left">
          <div className="rounded-circle mb-4">
            <img src={emptyIcon} alt="..."/>
          </div>
          <h6 className="text-primary text-uppercase">
            { t("Sorry, No results were found") }
          </h6>
          <p className="description mt-3">
            { t("Please Try Again") }
          </p>
        </CardBody>
      </Card>
    </Col>
  )
}


export default CardNotFound

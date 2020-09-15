import React from "react"

import { Card, CardBody, Col } from "reactstrap"

import emptyIcon from "./../assets/img/empty.png"


const CardNotFound = () => {

  return (
    <Col lg="4">
      <Card className="card-lift--hover shadow">
        <CardBody className="py-4 text-left">
          <div className="rounded-circle mb-4">
            <img src={emptyIcon} alt="..."/>
          </div>
          <h6 className="text-primary text-uppercase">
            Désolé, aucun résultat n'a été trouvé
          </h6>
          <p className="description mt-3">
            Veuillez réessayer
          </p>
        </CardBody>
      </Card>
    </Col>
  )
}


export default CardNotFound

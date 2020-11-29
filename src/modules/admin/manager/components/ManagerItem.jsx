import React from 'react'
import { Link } from "react-router-dom"
import { Button, Card, CardBody, Col} from "reactstrap"

import adminRoutes from './../../../../routes/admin'


export default ({ firstName, lastName, email, companyParam, id, onToggleModal }) => {

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
            <i className="far fa-user" />
          </div>
          <h6 className="text-primary text-uppercase">
            { firstName } { lastName }
          </h6>
          <p className="description mt-3">
            { email }
          </p>
          <Button
            className="btn-sm mt-4"
            color="warning"
            to={ adminRoutes.path + adminRoutes.routes.managerEdit.path.replace(":companyParam", companyParam).replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> Éditer
          </Button>
          <Button
            className="btn-sm mt-4"
            color="danger"
            onClick={() => onToggleModal(id) }
          >
            <i className="fas fa-trash" /> Supprimer
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

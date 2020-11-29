import React from 'react'
import { Link } from "react-router-dom"
import { Button, Card, CardBody, Col} from "reactstrap"

import moderatorRoutes from './../../../../routes/moderator'


export default ({ name, description, id, onToggleModal }) => {

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
            <i className="far fa-building" />
          </div>
          <h6 className="text-primary text-uppercase">
            { name }
          </h6>
          <p className="description mt-3">
            { description }
          </p>
          <Button
            className="btn-sm mt-4"
            color="info"
            to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeList.path.replace(":departmentParam", id) }
            tag={Link}
          >
            <i className="fa fa-eye" /> Invitations
          </Button>
          <Button
            className="btn-sm mt-4"
            color="primary"
            to={ moderatorRoutes.path + moderatorRoutes.routes.employeeList.path.replace(":departmentParam", id) }
            tag={Link}
          >
            <i className="fa fa-eye" /> Empolyé(e)s
          </Button>
          <Button
            className="btn-sm mt-4"
            color="warning"
            to={ moderatorRoutes.path + moderatorRoutes.routes.departmentEdit.path.replace(":param", id) }
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

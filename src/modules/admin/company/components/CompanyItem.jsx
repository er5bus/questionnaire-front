import React from 'react'
import { Link } from "react-router-dom"
import { Button, Card, CardBody, Col} from "reactstrap"

import adminRoutes from './../../../../routes/admin'


export default ({ onToggleModal =f=>f, name, description, universalName, color, id }) => {

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4" style={{ backgroundColor: color }}>
            <i className="far fa-building" />
          </div>
          <h6 className="text-primary text-uppercase">
            { name } ({ universalName })
          </h6>
          <p className="description mt-3">
            { description }
          </p>
          <Button
            className="btn-sm mt-4"
            color="warning"
            to={ adminRoutes.path + adminRoutes.routes.companyEdit.path.replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> Éditer
          </Button>
          <Button
            className="btn-sm mt-4"
            color="info"
            to={ adminRoutes.path + adminRoutes.routes.invitationManagerList.path.replace(":companyParam", id) }
            tag={Link}
          >
            <i className="fa fa-mail-bulk" /> Invitations
          </Button>

          <Button
            className="btn-sm mt-4"
            color="primary"
            to={ adminRoutes.path + adminRoutes.routes.managerList.path.replace(":companyParam", id) }
            tag={Link}
          >
            <i className="fa fa-eye" /> Directeur
          </Button>
          <Button
            className="btn-sm mt-4"
            color="primary"
            to={ adminRoutes.path + adminRoutes.routes.departmentList.path.replace(":companyParam", id) }
            tag={Link}
          >
            <i className="fa fa-building" /> { t("Departement") }
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

import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col} from "reactstrap"

import superAdminRoutes from './../../../routes/superAdmin'


export default ({ onToggleModal =f=>f, name, description, universalName, color, id }) => {

  const { t } = useTranslation()

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
            to={ superAdminRoutes.path + superAdminRoutes.routes.companyEdit.path.replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
          <Button
            className="btn-sm mt-4"
            color="danger"
            onClick={() => onToggleModal(id) }
          >
            <i className="fas fa-trash" /> { t("Delete") }
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

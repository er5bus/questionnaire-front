import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col} from "reactstrap"

import adminRoutes from './../../../../routes/admin'
import { API_BASE_URL } from './../../../../constants'


export default ({ name, description, id, onToggleModal }) => {

  const { t } = useTranslation()

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
            color="primary"
            to={ adminRoutes.path + adminRoutes.routes.employeeList.path.replace(":departmentParam", id) }
            tag={Link}
          >
            <i className="fa fa-eye" /> { t("Empolyees") }
          </Button>
          <a className="btn-sm mt-4 btn btn-success" href={`${API_BASE_URL}/api/export/csv/${id}`}>
            <i className="fa fa-save" /> { t("Télécharger csv") }
          </a>
          {/* <Button
            className="btn-sm mt-4"
            color="warning"
            to={ adminRoutes.path + adminRoutes.routes.departmentEdit.path.replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button> */}
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

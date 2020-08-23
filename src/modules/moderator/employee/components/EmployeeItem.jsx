import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col} from "reactstrap"

import moderatorRoutes from './../../../../routes/moderator'


export default ({ firstName, lastName, email, departmentParam, id }) => {

  const { t } = useTranslation()

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
            to={ moderatorRoutes.path + moderatorRoutes.routes.employeeEdit.path.replace(":departmentParam", departmentParam).replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

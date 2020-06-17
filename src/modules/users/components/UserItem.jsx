import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col} from "reactstrap"

import adminRoutes from './../../../routes/admin'


export default ({ fullname, username, email, company, id }) => {

  const { t } = useTranslation()

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4" style={{ backgroundColor: color }}>
            <i className="far fa-user" />
          </div>
          <h6 className="text-primary text-uppercase">
            { fullname } ({ username })
          </h6>
          <p className="description mt-3">
            { email }
          </p>
          <Button
            className="btn-sm mt-4"
            color="warning"
            to={ adminRoutes.path + adminRoutes.routes.userEdit.path.replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
          { user && user.id &&
          <Button
            className="btn-sm mt-4"
            color="info"
            to={ adminRoutes.path + adminRoutes.routes.userList.path.replace(":userParam", user.id) }
            tag={Link}
          >
            <i className="fa fa-mail-bulk" /> { t("show Company") }
          </Button>
          }
        </CardBody>
      </Card>
    </Col>
  )
}

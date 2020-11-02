import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col} from "reactstrap"

import adminRoutes from './../../../../routes/admin'


export default ({ firstName, lastName, email, questionnaires , departmentParam, id }) => {

  const { t } = useTranslation()
console.log(questionnaires[0] )
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
            to={ adminRoutes.path + adminRoutes.routes.employeeEdit.path.replace(":departmentParam", departmentParam).replace(":param", id) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
          {questionnaires[0]  ? <Button
            className="btn-sm mt-4"
            color="primary"
            to={ adminRoutes.path + adminRoutes.routes.rapport.path.replace(":param", id)   }
            tag={Link}
          >
            <i className="fa fa-eye" /> { t("Rapport") }
          </Button>  : null  }
          
        </CardBody>
      </Card>
    </Col>
  )
}

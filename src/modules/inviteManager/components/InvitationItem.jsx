import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col, Badge} from "reactstrap"

import adminRoutes from './../../../routes/admin'

import Moment from 'react-moment'

export default ({ onToggleDeleteModal =f=>f, onToggleSendInvitationModal=f=>f, fullName, expiredAt, email, id, companyParam }) => {

  const { t } = useTranslation()

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
            <i className="fas fa-mail-bulk" />
          </div>
          <h6 className="text-primary text-uppercase">
            { fullName } 
          </h6>
          <p className="description mt-3">
            { email }
          </p>
          <Badge><Moment>{ expiredAt }</Moment></Badge>
          <Button
            className="btn-sm mt-4"
            color="warning"
            to={ adminRoutes.path + adminRoutes.routes.invitationManagerEdit.path.replace(":managerParam", id).replace(":companyParam", companyParam) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
          <Button
            className="btn-sm mt-4"
            color="info"
            onClick={ () => onToggleSendInvitationModal(id) }
          >
            <i className="fas fa-paper-plane" /> { t("Resend mail") }
          </Button>
          <Button
            className="btn-sm mt-4"
            color="danger"
            onClick={() => onToggleDeleteModal(id) }
          >
            <i className="fas fa-trash" /> { t("Delete") }
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

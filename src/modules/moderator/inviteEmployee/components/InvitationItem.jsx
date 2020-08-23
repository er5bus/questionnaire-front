import React from 'react'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { Button, Card, CardBody, Col, Badge} from "reactstrap"

import moderatorRoutes from './../../../../routes/moderator'

import Moment from 'react-moment'

export default ({ onToggleDeleteModal =f=>f, onToggleSendInvitationModal=f=>f, sendAt, invitations, id, isExpired, departmentParam }) => {

  const { t } = useTranslation()

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
            <i className="fas fa-mail-bulk" />
          </div>
          <h6 className="text-info">
            { isExpired && <>{ t("Invitation expired") }</> }
            { !isExpired && !sendAt && <>{ t("Invitation not sent") }</> }
            { !isExpired && sendAt && <>{ t("Invitation sent at") } <Moment>{ sendAt }</Moment></> }
          </h6>
          <div>
            {
              invitations.map((invitation) => (
                <Badge className="mr-2" key={invitation.id}>{ invitation.email }</Badge>
              ))
            }
          </div>
          <Button
            className="btn-sm mt-4"
            color="warning"
            disabled={ isExpired }
            to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeEdit.path.replace(":employeeParam", id).replace(":departmentParam", departmentParam) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> { t("Edit") }
          </Button>
          <Button
            className="btn-sm mt-4"
            color="info"
            disabled={ isExpired }
            onClick={ () => onToggleSendInvitationModal(id) }
          >
            <i className="fas fa-paper-plane" /> { t("Resend mail") }
          </Button>
          <Button
            className="btn-sm mt-4"
            color="danger"
            disabled={ isExpired }
            onClick={() => onToggleDeleteModal(id) }
          >
            <i className="fas fa-trash" /> { t("Delete") }
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

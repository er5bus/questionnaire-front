import React from 'react'
import { Link } from "react-router-dom"
import { Button, Card, CardBody, Col, Badge} from "reactstrap"

import moderatorRoutes from './../../../../routes/moderator'
import anonymousRoutes from './../../../../routes/anonymous'

import copy from 'copy-to-clipboard'

import Moment from 'react-moment'

export default ({ onToggleDeleteModal =f=>f, onToggleSendInvitationModal=f=>f, token, sendAt, invitations, id, isExpired, departmentParam }) => {

  const link = window.location.protocol + "//" +
    window.location.host.split("/")[0] +
    anonymousRoutes.path +
    anonymousRoutes.routes.register.path.replace(":param", token)

  const onCopyLink = () => {
    copy(link)
  }

  return (
    <Col lg="4" className="pb-5">
      <Card className="shadow border-0">
        <CardBody className="py-5">
          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
            <i className="fas fa-mail-bulk" />
          </div>
          <h6 className="text-info">
            { isExpired && <>Invitation expirée</> }
            { !isExpired && !sendAt && <>Invitation non envoyée</> }
            { !isExpired && sendAt && <>Invitation envoyée à <Moment>{ sendAt }</Moment></> }
          </h6>
          { /*<h6 className="text-success">
            { link }
          </h6>*/}
          <div>
            {
              invitations.map((invitation) => (
                <Badge className="mr-2" key={invitation.id}>{ invitation.email }</Badge>
              ))
            }
          </div>
          <Button
            className="btn-sm mt-4"
            color="success"
            disabled={ isExpired }
            onClick={onCopyLink}
          >
            <i className="fas fa-copy" /> Copier le lien
          </Button>
          <Button
            className="btn-sm mt-4"
            color="warning"
            disabled={ isExpired }
            to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeEdit.path.replace(":employeeParam", id).replace(":departmentParam", departmentParam) }
            tag={Link}
          >
            <i className="fa fa-pencil-alt" /> Éditer
          </Button>
          <Button
            className="btn-sm mt-4"
            color="info"
            disabled={ isExpired }
            onClick={ () => onToggleSendInvitationModal(id) }
          >
            <i className="fas fa-paper-plane" /> Renvoyer le courrier
          </Button>
          <Button
            className="btn-sm mt-4"
            color="danger"
            disabled={ isExpired }
            onClick={() => onToggleDeleteModal(id) }
          >
            <i className="fas fa-trash" /> Supprimer
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

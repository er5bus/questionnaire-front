import React from 'react'
import { Link, useParams } from "react-router-dom"
import adminRoutes from "./../../../routes/admin"

import { useTranslation } from "react-i18next"


const InvitationLinkList = () => {

  const { companyParam } = useParams()
  const { t } = useTranslation()

  return (
    <div className="btn-wrapper">
      <Link
        className="btn-icon mb-3 mb-sm-0 btn btn-info"
        to={ adminRoutes.path + adminRoutes.routes.invitationList.path.replace(":companyParam", companyParam) }
      >
        <span className="btn-inner--icon mr-1">
          <i className="fas fa-tag" />
        </span>
        <span className="btn-inner--text">{t('Back to Invitation List')}</span>
      </Link>
    </div>
  )
}


export default InvitationLinkList

import React from 'react'
import { Link } from "react-router-dom"
import superAdminRoutes from "./../../../routes/superAdmin"

import { useTranslation } from "react-i18next"


const InvitationLinkList = () => {

  const { t } = useTranslation()

  return (
    <div className="btn-wrapper">
      <Link
        className="btn-icon mb-3 mb-sm-0 btn btn-info"
        to={ superAdminRoutes.path + superAdminRoutes.routes.invitationList.path }
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

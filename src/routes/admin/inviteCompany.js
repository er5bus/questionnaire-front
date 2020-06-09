import React from "react"

const InvitationList = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationList"))
const InvitationNew = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationNew"))
const InvitationEdit = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationEdit"))


export const invitationCompanyList = {
  path: "/invitations",
  component: InvitationList
}

export const invitationCompanyNew = {
  path: "/invitation/new",
  component: InvitationNew
}

export const invitationCompanyEdit = {
  path: "/invitation/:param/edit",
  component: InvitationEdit
}

import React from "react"

const InvitationList = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationList"))
const InvitationNew = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationNew"))
const InvitationEdit = React.lazy( () => import("../../modules/inviteCompany/containers/InvitationEdit"))


export const invitationList = {
  path: "/invitations",
  component: InvitationList
}

export const invitationNew = {
  path: "/invitation/new",
  component: InvitationNew
}

export const invitationEdit = {
  path: "/invitation/:param/edit",
  component: InvitationEdit
}

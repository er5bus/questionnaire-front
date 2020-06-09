import React from "react"

const InvitationList = React.lazy( () => import("../../modules/inviteManager/containers/InvitationList"))
const InvitationNew = React.lazy( () => import("../../modules/inviteManager/containers/InvitationNew"))
const InvitationEdit = React.lazy( () => import("../../modules/inviteManager/containers/InvitationEdit"))


export const invitationManagerList = {
  path: "/manager/invitations",
  component: InvitationList
}

export const invitationManagerNew = {
  path: "/manager/invitation/new",
  component: InvitationNew
}

export const invitationManagerEdit = {
  path: "/manager/invitation/:param/edit",
  component: InvitationEdit
}

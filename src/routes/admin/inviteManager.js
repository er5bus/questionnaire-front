import React from "react"

const InvitationList = React.lazy( () => import("../../modules/inviteManager/containers/InvitationList"))
const InvitationNew = React.lazy( () => import("../../modules/inviteManager/containers/InvitationNew"))
const InvitationEdit = React.lazy( () => import("../../modules/inviteManager/containers/InvitationEdit"))


export const invitationManagerList = {
  path: "/company/:companyParam/manager/invitations",
  component: InvitationList,
}

export const invitationManagerNew = {
  path: "/company/:companyParam/manager/invitation/new",
  component: InvitationNew,
}

export const invitationManagerEdit = {
  path: "/company/:companyParam/manager/invitation/:managerParam/edit",
  component: InvitationEdit,
}

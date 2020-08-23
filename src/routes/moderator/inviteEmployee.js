import React from "react"

const InvitationList = React.lazy( () => import("../../modules/moderator/inviteEmployee/containers/InvitationList"))
const InvitationNew = React.lazy( () => import("../../modules/moderator/inviteEmployee/containers/InvitationNew"))
const InvitationEdit = React.lazy( () => import("../../modules/moderator/inviteEmployee/containers/InvitationEdit"))


export const invitationEmployeeList = {
  path: "/department/:departmentParam/employee/invitations",
  component: InvitationList,
}

export const invitationEmployeeNew = {
  path: "/department/:departmentParam/employee/invitation/new",
  component: InvitationNew,
}

export const invitationEmployeeEdit = {
  path: "/department/:departmentParam/employee/invitation/:employeeParam/edit",
  component: InvitationEdit,
}

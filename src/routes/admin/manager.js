import React from "react"

const ManagerList = React.lazy( () => import("../../modules/admin/manager/containers/ManagerList"))
const ManagerNew = React.lazy( () => import("../../modules/admin/manager/containers/ManagerNew"))
const ManagerEdit = React.lazy( () => import("../../modules/admin/manager/containers/ManagerEdit"))

export const managerList = {
  path: "/company/:companyParam/managers",
  component: ManagerList
}

export const managerNew = {
  path: "/company/:companyParam/manager/new",
  component: ManagerNew
}

export const managerEdit = {
  path: "/company/:companyParam/manager/:param/edit",
  component: ManagerEdit
}

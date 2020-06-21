import React from "react"

const DepartmentList = React.lazy( () => import("../../modules/department/containers/DepartmentList"))
const DepartmentNew = React.lazy( () => import("../../modules/department/containers/DepartmentNew"))
const DepartmentEdit = React.lazy( () => import("../../modules/department/containers/DepartmentEdit"))


export const departmentList = {
  path: "/departments",
  component: DepartmentList
}

export const departmentNew = {
  path: "/department/new",
  component: DepartmentNew
}

export const departmentEdit = {
  path: "/department/:param/edit",
  component: DepartmentEdit
}

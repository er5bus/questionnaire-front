import React from "react"

const DepartmentList = React.lazy( () => import("../../modules/admin/department/containers/DepartmentList"))
const DepartmentNew = React.lazy( () => import("../../modules/admin/department/containers/DepartmentNew"))
const DepartmentEdit = React.lazy( () => import("../../modules/admin/department/containers/DepartmentEdit"))


 
export const departmentList = {
  path: "/company/:companyParam/departments",
  component: DepartmentList
}

export const departmentNew = {
  path: "/company/:companyParam/department/new",
  component: DepartmentNew
}

export const departmentEdit = {
  path: "/company/:companyParam/department/:param/edit",
  component: DepartmentEdit
}

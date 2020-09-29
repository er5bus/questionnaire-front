import React from "react"

const EmployeeList = React.lazy( () => import("../../modules/admin/employee/containers/EmployeeList"))
const EmployeeNew = React.lazy( () => import("../../modules/admin/employee/containers/EmployeeNew"))
const EmployeeEdit = React.lazy( () => import("../../modules/admin/employee/containers/EmployeeEdit"))

export const employeeList = {
  path: "/department/:departmentParam/employees",
  component: EmployeeList
}

export const employeeNew = {
  path: "/department/:departmentParam/employee/new",
  component: EmployeeNew
}

export const employeeEdit = {
  path: "/department/:departmentParam/employee/:param/edit",
  component: EmployeeEdit
}

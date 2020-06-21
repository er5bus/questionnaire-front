import React from "react"

const EmployeeList = React.lazy( () => import("../../modules/employee/containers/EmployeeList"))
const EmployeeNew = React.lazy( () => import("../../modules/employee/containers/EmployeeNew"))
const EmployeeEdit = React.lazy( () => import("../../modules/employee/containers/EmployeeEdit"))

export const employeeList = {
  path: "/employees",
  component: EmployeeList
}

export const employeeNew = {
  path: "/employee/new",
  component: EmployeeNew
}

export const employeeEdit = {
  path: "/employee/:param/edit",
  component: EmployeeEdit
}

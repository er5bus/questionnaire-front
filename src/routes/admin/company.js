import React from 'react'

const CompanyList = React.lazy( () => import("../../modules/admin/company/containers/CompanyList"))
const CompanyNew = React.lazy( () => import("../../modules/admin/company/containers/CompanyNew"))
const CompanyEdit = React.lazy( () => import("../../modules/admin/company/containers/CompanyEdit"))


export const companyList = {
  path: "/companies",
  component: CompanyList
}

export const companyNew = {
  path: "/company/new",
  component: CompanyNew
}

export const companyEdit = {
  path: "/company/:param/edit",
  component: CompanyEdit
}

import React from 'react'

const Dashbord = React.lazy( () => import("../../modules/employee/dashbord/containers/Dashbord"))

export const dashbord = {
  path: "/dashbord",
  component: Dashbord,
}

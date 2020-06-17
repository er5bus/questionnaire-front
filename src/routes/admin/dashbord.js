import React from "react"

const Dashbord = React.lazy( () => import("../../modules/dashbord/containers/AdminDashbord"))

export const dashbord = {
  path: "/dashbord",
  component: Dashbord,
}

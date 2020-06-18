import React from "react"

const Dashbord = React.lazy( () => import("../../modules/dashbord/containers/ModeratorDashbord"))

export const dashbord = {
  path: "/dashbord",
  component: Dashbord,
}

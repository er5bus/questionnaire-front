import React from "react"

import { ROLES } from './../../constants'

const ModeratorDashbord = React.lazy( () => import("../../modules/dashbord/containers/ModeratorDashbord"))

export const dashbord = {
  path: "/dashbord",
  component: Dashbord,
}

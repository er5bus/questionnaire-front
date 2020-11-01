import React from 'react'

const Physical = React.lazy( () => import("../../modules/moderator/physical/containers/Physical"))

export const physical = {
  path: "/physical",
  component: Physical,
}

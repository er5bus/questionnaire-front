import React from 'react'

const Ergonomics = React.lazy( () => import("../../modules/moderator/ergonomics/containers/Ergonomics"))

export const ergonomics = {
  path: "/ergonomics",
  component: Ergonomics,
}

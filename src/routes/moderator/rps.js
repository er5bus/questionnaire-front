import React from 'react'

const RPS = React.lazy( () => import("../../modules/moderator/rps/containers/RPS"))

export const rps = {
  path: "/rps",
  component: RPS,
}

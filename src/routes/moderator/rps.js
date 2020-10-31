import React from 'react'

const RPS = React.lazy( () => import("../../modules/moderator/rps/containers/Main"))

export const rps = {
  path: "/rps",
  component: RPS,
}

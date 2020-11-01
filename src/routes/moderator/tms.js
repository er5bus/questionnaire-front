import React from 'react'

const TMS = React.lazy( () => import("../../modules/moderator/tms/containers/TMS"))

export const tms = {
  path: "/tms",
  component: TMS,
}

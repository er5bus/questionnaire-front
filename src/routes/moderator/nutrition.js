import React from 'react'

const Nutrition = React.lazy( () => import("../../modules/moderator/nutrition/containers/Nutrition"))

export const nutrition = {
  path: "/nutrition",
  component: Nutrition,
}

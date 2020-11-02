import { lazy } from 'react'

const Rapport = lazy( () => import('../../modules/admin/questionnaire/containers/Rapport'))

export const rapport = {
  path: "/Rapport/:param",
  component: Rapport
}

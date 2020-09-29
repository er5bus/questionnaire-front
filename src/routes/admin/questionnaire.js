import { lazy } from 'react'

const Questionnaire = lazy( () => import('../../modules/admin/questionnaire/containers/Questionnaire'))

export const questionnaire = {
  path: "/questionnaire",
  component: Questionnaire
}

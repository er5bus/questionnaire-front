import { lazy } from 'react'

const Questionnaire = lazy( () => import('../../modules/employee/questionnaire/containers/Questionnaire'))

export const questionnaire = {
  path: "/questionnaire",
  component: Questionnaire
}

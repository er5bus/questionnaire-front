import { ROLES } from './../../constants'

import * as medicalRecord from './medicalRecord'
import * as questionnaire from './questionnaire'

export default {
  path: "/employee",
  role: ROLES.EMPLOYEE,

  routes: {
    ...medicalRecord,
    ...questionnaire
  }
}

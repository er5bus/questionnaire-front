import { ROLES } from './../../constants'

import * as dashbord from './dashbord'
import * as medicalRecord from './medicalRecord'
import * as questionnaire from './questionnaire'

export default {
  path: "/employee",
  role: ROLES.EMPLOYEE,

  routes: {
    ...dashbord,
    ...medicalRecord,
    ...questionnaire
  }
}

import { ROLES } from './../../constants'

import * as inviteManager from './inviteManager'
import * as company from './company'
import * as department from './department'
import * as dashbord from './dashbord'
import * as manager from './manager'
import * as employee from './employee'
import * as questionnaire from './questionnaire'

export default {
  path: "/admin",
  role: ROLES.ADMIN, 

  routes: {
    ...inviteManager,
    ...company,
    ...department,
    ...dashbord,
    ...manager,
    ...employee,
    ...questionnaire
  }
}

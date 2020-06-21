import { ROLES } from './../../constants'

import * as dashbord from './dashbord'
import * as department from './department'
import * as employee from './employee'


export default {
  path: "/moderator",
  role: ROLES.MODERATOR,

  routes: {
    ...dashbord,
    ...department,
    ...employee
  }
}

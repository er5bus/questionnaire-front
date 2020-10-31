import { ROLES } from './../../constants'

import * as dashbord from './dashbord'
import * as department from './department'
import * as employee from './employee'
import * as inviteEmployee from './inviteEmployee'
import * as rps from './rps'


export default {
  path: "/moderator",
  role: ROLES.MODERATOR,

  routes: {
    ...dashbord,
    ...department,
    ...employee,
    ...rps,
    ...inviteEmployee
  }
}

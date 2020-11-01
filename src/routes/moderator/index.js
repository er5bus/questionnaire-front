import { ROLES } from './../../constants'

import * as dashbord from './dashbord'
import * as department from './department'
import * as employee from './employee'
import * as inviteEmployee from './inviteEmployee'
import * as rps from './rps'
import * as tms from './tms'
import * as ergonomics from './ergonomics'
import * as physical from './physical'
import * as nutrition from './nutrition'



export default {
  path: "/moderator",
  role: ROLES.MODERATOR,

  routes: {
    ...dashbord,
    ...department,
    ...employee,
    ...rps,
    ...tms,
    ...ergonomics,
    ...physical,
    ...nutrition,
    ...inviteEmployee
  }
}

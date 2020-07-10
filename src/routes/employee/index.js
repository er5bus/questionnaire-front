import { ROLES } from './../../constants'

import * as dashbord from './dashbord'
import * as medicalInfo from './medicalInfo'


export default {
  path: "/employee",
  role: ROLES.MODERATOR,

  routes: {
    ...dashbord,
    ...medicalInfo,
  }
}

import { ROLES } from './../../constants'

import * as inviteManager from './inviteManager'
import * as company from './company'
import * as dashbord from './dashbord'
import * as user from './user'

export default {
  path: "/moderator",
  role: ROLES.MODERATOR,

  routes: {
    ...inviteManager,
    ...company,
    ...dashbord,
    ...user
  }
}

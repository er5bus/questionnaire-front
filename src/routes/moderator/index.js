import { ROLES } from './../../constants'

import * as dashbord from './dashbord'

export default {
  path: "/moderator",
  role: ROLES.MODERATOR,

  routes: {
    ...dashbord,
  }
}

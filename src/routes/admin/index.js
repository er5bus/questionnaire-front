import * as inviteManager from './inviteManager'
import * as company from './company'

export default {
  path: "/super-admin",
  routes: {
    ...inviteManager,
    ...company
  }
}

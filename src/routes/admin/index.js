import * as inviteCompany from './inviteCompany'
import * as inviteManager from './inviteManager'
import * as company from './company'

export default {
  path: "/super-admin",
  routes: {
    ...inviteCompany,
    ...inviteManager,
    ...company
  }
}

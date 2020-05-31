import * as inviteCompany from './inviteCompany'
import * as company from './company'

export default {
  path: "/super-admin",
  routes: {
    ...inviteCompany,
    ...company
  }
}

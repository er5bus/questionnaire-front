import anonymousRoutes from './anonymous'
import adminRoutes from './admin'
import moderatorRoutes from './moderator'
import employeeRoutes from './employee'


export default {
  anonymous: anonymousRoutes,
  admin: adminRoutes,
  moderator: moderatorRoutes,
  employee: employeeRoutes
}

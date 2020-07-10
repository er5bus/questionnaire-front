import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

// middleware redux-thunk
import api from './middleware/api'
import { deleteSession, saveSession } from './middleware/session'

// reducers

// anonymous
import authReducer from './modules/anonymous/authentication/reducers'

// moderator
import dashbordModeratorReducer from './modules/moderator/dashbord/reducers'
import departmentReducer from './modules/moderator/department/reducers'
import employeeReducer from './modules/moderator/employee/reducers'

// admin
import companyReducer from './modules/admin/company/reducers'
import userReducer from './modules/admin/user/reducers'
import dashbordAdminReducer from './modules/admin/dashbord/reducers'
import inviteManagerReducer from './modules/admin/inviteManager/reducers'

import { reducer as formReducer } from 'redux-form'
import { sessionReducer } from 'redux-react-session'
import { reducer as notificationReducer } from 'react-notification-system-redux'

const rootReducer = combineReducers({
  // anonymous
  auth: authReducer,

  // common
  session: sessionReducer,
  form: formReducer,
  notifications: notificationReducer,

  // admin 
  company: companyReducer,
  dashbordAdmin: dashbordAdminReducer,
  user: userReducer,
  inviteManager: inviteManagerReducer,

  // moderator
  department: departmentReducer,
  employee: employeeReducer,
  dashbordModerator: dashbordModeratorReducer,
})

export default ( preloadedState = {} ) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, api, deleteSession, saveSession))
  )

  return store
}

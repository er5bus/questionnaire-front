import { reducer as notificationReducer } from 'react-notification-system-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { sessionReducer } from 'redux-react-session';
import thunk from 'redux-thunk';
// middleware redux-thunk
import { api, questionApi, questionFoodApi } from './middleware/api';
import { deleteSession, saveSession } from './middleware/session';
// admin
import companyReducer from './modules/admin/company/reducers';
import dashbordAdminReducer from './modules/admin/dashbord/reducers';
import inviteManagerReducer from './modules/admin/inviteManager/reducers';
import userReducer from './modules/admin/user/reducers';
// reducers
// anonymous
import authReducer from './modules/anonymous/authentication/reducers';
// employee
import medicalRecordReducer from './modules/employee/medicalRecord/reducers';
import questionnaireReducer from './modules/employee/questionnaire/reducers';
// moderator
import dashbordModeratorReducer from './modules/moderator/dashbord/reducers';
import departmentReducer from './modules/moderator/department/reducers';
import employeeReducer from './modules/moderator/employee/reducers';







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

  // employee
  medicalRecord: medicalRecordReducer,
  questionnaire: questionnaireReducer
})

export default (preloadedState = {}) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, api, questionApi, questionFoodApi, deleteSession, saveSession))
  )

  return store
}

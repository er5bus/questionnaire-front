import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

// middleware redux-thunk
import api from "./middleware/api"
import { deleteSession, saveSession } from "./middleware/session"

// reducers
import authReducer from "./modules/authentication/reducers"

import companyReducer from './modules/company/reducers'
import dashbordReducer from './modules/dashbord/reducers'
import inviteManagerReducer from './modules/inviteManager/reducers'

import { reducer as formReducer } from 'redux-form'
import { sessionReducer } from 'redux-react-session'
import { reducer as notificationReducer } from 'react-notification-system-redux'

const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
  form: formReducer,
  notifications: notificationReducer,
  company: companyReducer,
  dashbord: dashbordReducer,
  inviteManager: inviteManagerReducer
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

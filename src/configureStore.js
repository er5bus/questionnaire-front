import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'



// middleware redux-thunk
import api from "./middleware/api"
import { deleteSession, saveSession } from "./middleware/session"

// reducers
import authReducer from "./modules/authentication/reducers"

import inviteCompanyReducer from './modules/inviteCompany/reducers'
import companyReducer from './modules/company/reducers'


import { reducer as formReducer } from 'redux-form'
import { sessionReducer } from 'redux-react-session'
import {reducer as notificationReducer} from 'react-notification-system-redux'

const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
  form: formReducer,
  notifications: notificationReducer,
  inviteCompany: inviteCompanyReducer,
  company: companyReducer
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

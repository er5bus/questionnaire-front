import { ACTIONS } from "./../constants";

const defaultState = {
  currentUser: null, accessToken: null, isLoading: false, isLoadingInvitation: false, error: null
}
export default (state = { currentUser: null, accessToken: null, isLoading: false, isLoadingInvitation: false, error: null }, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_ERRORS: {
      return { ...state, error: null }
    }
    case ACTIONS.ACCOUNT_LOGIN_INIT: {
      return { ...state, isLoading: true, currentUser: null, accessToken: null, error: null }
    }
    case ACTIONS.ACCOUNT_LOGIN_SUCCEDED: {
      const { access_token: accessToken, ...currentUser } = payload
      return { ...state, currentUser, accessToken, isLoading: false, error: null }
    }
    case ACTIONS.ACCOUNT_LOGIN_FAILED: {
      return { ...state, error: payload, isLoading: false, currentUser: null, accessToken: null }
    }

    case ACTIONS.CREATE_ACCOUNT_INIT: {
      return { ...state, isLoading: true, currentUser: null, accessToken: null, error: null }
    }
    case ACTIONS.CREATE_ACCOUNT_SUCCEDED: {
      const { access_token: accessToken, ...currentUser } = payload
      return { ...state, currentUser, accessToken, isLoading: false, error: null }
    }
    case ACTIONS.CREATE_ACCOUNT_FAILED: {
      return { ...state, error: payload, isLoading: false, currentUser: null, accessToken: null }
    }

    case ACTIONS.FETCH_ACCOUNT_INVITATION_INIT: {
      return { ...state, isLoadingInvitation: true, currentUser: null, accessToken: null, error: null }
    }
    case ACTIONS.FETCH_ACCOUNT_INVITATION_SUCCEDED: {
      return { ...state, invitation: payload, isLoadingInvitation: false, error: null }
    }
    case ACTIONS.FETCH_ACCOUNT_INVITATION_FAILED: {
      return { ...state, error: payload, isLoadingInvitation: false }
    }
    case ACTIONS.CLEAN_CACH: {
      return state

    }
    default: {
      return { ...state, ...defaultState }
    }
  }
}

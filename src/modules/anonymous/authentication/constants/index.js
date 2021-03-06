export const ACTIONS = {
  ACCOUNT_LOGIN_INIT: "ACCOUNT_LOGIN_INIT",
  ACCOUNT_LOGIN_SUCCEDED: "ACCOUNT_LOGIN_SUCCEDED",
  ACCOUNT_LOGIN_FAILED: "ACCOUNT_LOGIN_FAILED",

  ACCOUNT_LOGOUT_INIT: "ACCOUNT_LOGOUT_INIT",
  ACCOUNT_LOGOUT_SUCCEDED: "ACCOUNT_LOGOUT_SUCCEDED",
  ACCOUNT_LOGOUT_FAILED: "ACCOUNT_LOGOUT_FAILED",

  FETCH_ACCOUNT_INVITATION_INIT: "FETCH_ACCOUNT_INVITATION_INIT",
  FETCH_ACCOUNT_INVITATION_SUCCEDED: "FETCH_ACCOUNT_INVITATION_SUCCEDED",
  FETCH_ACCOUNT_INVITATION_FAILED: "FETCH_ACCOUNT_INVITATION_FAILED",

  CREATE_ACCOUNT_INIT: "CREATE_ACCOUNT_INIT",
  CREATE_ACCOUNT_SUCCEDED: "CREATE_ACCOUNT_SUCCEDED",
  CREATE_ACCOUNT_FAILED: "CREATE_ACCOUNT_FAILED",

  CLEAR_ERRORS: "CLEAR_ERRORS",
  CLEAN_CACH: "CLEAN_CACH"
}

export const ENDPOINT = {
  LOGIN: "/api/auth/login",
  LOGOUT: "/api/auth/logout",
  REGISTER: "/api/auth/register/:param",
  INVITATION: "/api/auth/invitation/:param"
}

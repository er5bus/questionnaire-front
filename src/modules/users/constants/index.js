export const ACTIONS = {
  FETCH_USERS_INIT: "FETCH_USERS_INIT",
  FETCH_USERS_SUCCEDED: "FETCH_USERS_SUCCEDED",
  FETCH_USERS_FAILED: "FETCH_USERS_FAILED",

  CLEAR_USER_FORM: "CLEAR_USER_FORM",

  CREATE_USER_INIT: "CREATE_USER_INIT",
  CREATE_USER_SUCCEDED: "CREATE_USER_SUCCEDED",
  CREATE_USER_FAILED: "CREATE_USER_FAILED",

  FETCH_USER_INIT: "FETCH_USER_INIT",
  FETCH_USER_SUCCEDED: "FETCH_USER_SUCCEDED",
  FETCH_USER_FAILED: "FETCH_USER_FAILED",

  EDIT_USER_INIT: "EDIT_USER_INIT",
  EDIT_USER_SUCCEDED: "EDIT_USER_SUCCEDED",
  EDIT_USER_FAILED: "EDIT_USER_FAILED",

  DELETE_USER_INIT: "DELETE_USER_INIT",
  DELETE_USER_SUCCEDED: "DELETE_USER_SUCCEDED",
  DELETE_USER_FAILED: "DELETE_USER_FAILED",

  FILTER_USERS: "FILTER_USERS"
}

export const ENDPOINT = {
  USERS: "/api/users",
  USER: "/api/user/:param"
}

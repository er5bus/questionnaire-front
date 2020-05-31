export const ACTIONS = {
  FETCH_INVITATIONS_INIT: "FETCH_INVITATIONS_INIT",
  FETCH_INVITATIONS_SUCCEDED: "FETCH_INVITATIONS_SUCCEDED",
  FETCH_INVITATIONS_FAILED: "FETCH_INVITATIONS_FAILED",

  CLEAR_INVITATION_FORM: "CLEAR_INVITATION_FORM",

  CREATE_INVITATION_INIT: "CREATE_INVITATION_INIT",
  CREATE_INVITATION_SUCCEDED: "CREATE_INVITATION_SUCCEDED",
  CREATE_INVITATION_FAILED: "CREATE_INVITATION_FAILED",

  FETCH_INVITATION_INIT: "FETCH_INVITATION_INIT",
  FETCH_INVITATION_SUCCEDED: "FETCH_INVITATION_SUCCEDED",
  FETCH_INVITATION_FAILED: "FETCH_INVITATION_FAILED",

  EDIT_INVITATION_INIT: "EDIT_INVITATION_INIT",
  EDIT_INVITATION_SUCCEDED: "EDIT_INVITATION_SUCCEDED",
  EDIT_INVITATION_FAILED: "EDIT_INVITATION_FAILED",

  DELETE_INVITATION_INIT: "DELETE_INVITATION_INIT",
  DELETE_INVITATION_SUCCEDED: "DELETE_INVITATION_SUCCEDED",
  DELETE_INVITATION_FAILED: "DELETE_INVITATION_FAILED",

  FILTER_INVITATIONS: "FILTER_INVITATIONS"
}

export const ENDPOINT = {
  INVITATIONS: "/api/invitations/company",
  INVITATION: "/api/invitation/company/:param"
}

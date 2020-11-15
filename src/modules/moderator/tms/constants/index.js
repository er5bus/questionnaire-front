export const ACTIONS = {
  FETCH_DEPARMTNETS_INIT: "tms@FETCH_DEPARMTNETS_INIT",
  FETCH_DEPARMTNETS_SUCCEDED: "tms@FETCH_DEPARMTNETS_SUCCEDED",
  FETCH_DEPARMTNETS_FAILED: "tms@FETCH_DEPARMTNETS_FAILED",
  FETCH_DETAILS_OF_TROUBLES_INIT: "tms@FETCH_DETAILS_OF_TROUBLES_INIT",
  FETCH_DETAILS_OF_TROUBLES_SUCCEDED: "tms@FETCH_DETAILS_OF_TROUBLES_SUCCEDED",
  FETCH_DETAILS_OF_TROUBLES_FAILED: "tms@FETCH_DETAILS_OF_TROUBLES_FAILED",
  FETCH_NEED_FOR_INTERVENTIONS_INIT: "tms@FETCH_NEED_FOR_INTERVENTIONS_INIT",
  FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED: "tms@FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED",
  FETCH_NEED_FOR_INTERVENTIONS_FAILED: "tms@FETCH_NEED_FOR_INTERVENTIONS_FAILED"
}

export const ENDPOINT = {
  ALL_DEPARTMENTS: "/api/company/:companyParam/departments/all",
  DETAILS_OF_TROUBLES: "/api/tms-monitoring/details-of-troubles/:deparmentParam",
  NEED_FOR_INTERVENTIONS: "/api/tms-monitoring/need-for-intervention/:deparmentParam"
}
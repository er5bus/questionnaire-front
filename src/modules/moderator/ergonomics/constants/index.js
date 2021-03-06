export const ACTIONS = {
  FETCH_DEPARMTNETS_INIT: "ergonomics@FETCH_DEPARMTNETS_INIT",
  FETCH_DEPARMTNETS_SUCCEDED: "ergonomics@FETCH_DEPARMTNETS_SUCCEDED",
  FETCH_DEPARMTNETS_FAILED: "ergonomics@FETCH_DEPARMTNETS_FAILED",
  FETCH_DETAILS_OF_TROUBLES_INIT: "ergonomics@FETCH_DETAILS_OF_TROUBLES_INIT",
  FETCH_DETAILS_OF_TROUBLES_SUCCEDED: "ergonomics@FETCH_DETAILS_OF_TROUBLES_SUCCEDED",
  FETCH_DETAILS_OF_TROUBLES_FAILED: "ergonomics@FETCH_DETAILS_OF_TROUBLES_FAILED",
  FETCH_NEED_FOR_INTERVENTIONS_INIT: "ergonomics@FETCH_NEED_FOR_INTERVENTIONS_INIT",
  FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED: "ergonomics@FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED",
  FETCH_NEED_FOR_INTERVENTIONS_FAILED: "ergonomics@FETCH_NEED_FOR_INTERVENTIONS_FAILED"
}

export const ENDPOINT = {
  ALL_DEPARTMENTS: "/api/company/:companyParam/departments/all",
  DETAILS_OF_TROUBLES: "/api/ergonomics-monitoring/details-of-troubles/:deparmentParam",
  NEED_FOR_INTERVENTIONS: "/api/ergonomics-monitoring/need-for-intervention/:deparmentParam"
}

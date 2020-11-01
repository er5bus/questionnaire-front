export const ACTIONS = {
  FETCH_DEPARMTNETS_INIT: "dashbord@FETCH_DEPARMTNETS_INIT",
     FETCH_DEPARMTNETS_SUCCEDED: "dashbord@FETCH_DEPARMTNETS_SUCCEDED",
     FETCH_DEPARMTNETS_FAILED: "dashbord@FETCH_DEPARMTNETS_FAILED",
        FETCH_BREAKDOWN_OF_FAILURES_INIT: "dashbord@FETCH_BREAKDOWN_OF_FAILURES_INIT",
   FETCH_BREAKDOWN_OF_FAILURES_SUCCEDED: "dashbord@FETCH_BREAKDOWN_OF_FAILURES_SUCCEDED",
   FETCH_BREAKDOWN_OF_FAILURES_FAILED: "dashbord@FETCH_BREAKDOWN_OF_FAILURES_FAILED",
   FETCH_NEED_FOR_INTERVENTIONS_INIT: "dashbord@FETCH_NEED_FOR_INTERVENTIONS_INIT",
   FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED: "dashbord@FETCH_NEED_FOR_INTERVENTIONS_SUCCEDED",
   FETCH_NEED_FOR_INTERVENTIONS_FAILED: "dashbord@FETCH_NEED_FOR_INTERVENTIONS_FAILED"
}

export const ENDPOINT = {
  ALL_DEPARTMENTS: "/api/company/:companyParam/departments/all",
  BREAKDOWN_OF_FAILURES: "/api/hrd-general-monitoring/breakdown-of-failures/:deparmentParam",
  NEED_FOR_INTERVENTIONS: "/api/hrd-general-monitoring/need-for-intervention/:deparmentParam"
}

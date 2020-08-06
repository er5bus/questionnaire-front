export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN
export const API_QUESTION_BASE_URL = process.env.REACT_APP_API_QUESTION_BASE_URL
export const API_FOOD_BASE_URL = process.env.REACT_APP_API_FOOD_BASE_URL
export const CALL_API = "middleware@CALL_API"
export const CALL_QUESTION_API = "middleware@CALL_QUESTION_API"
export const CALL_FOOD_API = "middleware@CALL_FOOD_API"
export const SAVE_SESSION = "middleware@SAVE_SESSION"
export const DELETE_SESSION = "middleware@DELETE_SESSION"


export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
}


export const ROLES = {
  ADMIN: 1,
  MODERATOR: 2,
  EMPLOYEE: 4
}


export const COMPANY_TYPE = [
  { label: "Public Company", value: "Public Company" },
  { label: "Educational", value: "Educational" },
  { label: "Self Employed", value: "Self Employed" },
  { label: "Government Agency", value: "Government Agency" },
  { label: "Non Profit", value: "Non Profit" },
  { label: "Self Owned", value: "Self Owned" },
  { label: "Privately Held", value: "Privately Held" },
  { label: "Partnership", value: "Partnership" }
]


export const COMPANY_STATUS = [
  { label: "Operating", value: "Operating" },
  { label: "Operating Subsidiary", value: "Operating Subsidiary" },
  { label: "Reorganizing", value: "Reorganizing" },
  { label: "Out of Business", value: "Out of Business" },
  { label: "Acquired", value: "Acquired" }
]

export const COMPANY_RANGE = [
  { label: "1", value: "1" },
  { label: "2-10", value: "2-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-500", value: "201-500" },
  { label: "501-1000", value: "501-1000" },
  { label: "1001-5000", value: "1001-5000" },
  { label: "5001-10,000", value: "5001-10,000" },
  { label: "10,000+", value: "10,000+" }
]

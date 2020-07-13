import React from "react"

const MedicalRecord = React.lazy( () => import("../../modules/employee/medicalRecord/containers/MedicalRecord"))

export const medicalRecord = {
  path: "/medical/record",
  component: MedicalRecord
}

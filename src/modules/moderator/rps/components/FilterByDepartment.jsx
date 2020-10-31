import React from "react"
import { Field, reduxForm } from "redux-form"
import { Button } from "reactstrap"

import { Spinner, Col, Row } from "reactstrap"

import { required } from "./../../../../utils/validations"

import SelectField from "./../../../../components/SelectField"


const FilterByDepartmentForm = (props) => {

  const { handleSubmit, isLoading, departments, reset } = props

  console.log(typeof departments)

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="department"
        component={SelectField}
        className="form-control"
        placeholder="Sélectionnez un département"
        label="Sélectionnez un départment"
        type="text"
        choices={departments}
        validate={[ required ]}
      />
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-search mr-2"></i> }
          Filtrer
        </Button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'filter-by-department',
})(FilterByDepartmentForm)

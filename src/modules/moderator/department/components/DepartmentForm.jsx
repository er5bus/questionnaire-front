import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { connect } from "react-redux"

import { Spinner } from "reactstrap"

import { required, maxLength, minLength } from "./../../../../utils/validations"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

let DepartmentForm = (props) => {

  const { handleSubmit, isLoading, reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("employee", props.errors && props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("employee"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={InputField}
        className="form-control"
        placeholder="Nom du département"
        label="Nom du département"
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      <Field
        name="description"
        component={InputField}
        className="form-control"
        placeholder="Description du département"
        label="Description du département"
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          Enregistrer le département
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> Effacer les valeurs
        </Button>
      </div>
    </Form>
  )
}


DepartmentForm = reduxForm({
  form: 'department',
  touchOnBlur: false
})(DepartmentForm)

export default connect(
  state => ({
    initialValues: state.department.item // pull initial values from account reducer
  })
)(DepartmentForm)

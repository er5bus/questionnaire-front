import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Spinner } from "reactstrap"

import { required, maxLength, minLength } from "./../../../../utils/validations"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

let DepartmentForm = (props) => {

  const { t } = useTranslation()
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
        placeholder={t("Department Name")}
        label={t("Department Name")}
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      <Field
        name="description"
        component={InputField}
        className="form-control"
        placeholder={t("Department Description")}
        label={t("Department Description")}
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          {t("Save Department")}
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> {t("Clear values")}
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

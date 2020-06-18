import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Spinner } from "reactstrap"

import { required, maxLength, minLength, email } from "./../../../utils/validations"

import Form from "./../../../components/Form"
import InputField from "./../../../components/InputField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

let TagForm = (props) => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading, reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("user", props.errors && props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("user"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="fullName"
        component={InputField}
        className="form-control"
        icon="ni ni-hat-3"
        placeholder={t("Name")}
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      <Field
        name="email"
        component={InputField}
        className="form-control"
        icon="ni ni-email-83"
        placeholder={t("Email")}
        type="text"
        validate={[ email, required ]}
      />
      <Field
        name="password"
        component={InputField}
        className="form-control"
        icon="ni ni-lock-circle-open"
        placeholder={t("Password")}
        type="password"
        validate={[required, minLength4, maxLength30]}
      />

      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          {t("Save User")}
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> {t("Clear values")}
        </Button>
      </div>
    </Form>
  )
}


TagForm = reduxForm({
  form: 'user',
  touchOnBlur: false
})(TagForm)

export default connect(
  state => ({
    initialValues: state.user.item // pull initial values from account reducer
  })
)(TagForm)

import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Spinner, Col, Row } from "reactstrap"

import { required, maxLength, minLength, email } from "./../../../../utils/validations"

import InputField from "./../../../../components/InputField"
import SelectField from "./../../../../components/SelectField"


const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

let TagForm = (props) => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading, reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("manager", props.errors && props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("manager"))
    }
  }, [props])

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col lg="6">
          <Field
            name="firstName"
            component={InputField}
            className="form-control"
            placeholder={t("First Name")}
            label={t("First Name")}
            type="text"
            validate={[ required, minLength4, maxLength30 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="lastName"
            component={InputField}
            className="form-control"
            placeholder={t("Last Name")}
            label={t("Last Name")}
            type="text"
            validate={[ required, minLength4, maxLength30 ]}
          />
        </Col>
      </Row>
      <Field
        name="professionalEmail"
        component={InputField}
        className="form-control"
        placeholder={t("Professional Email")}
        label={t("Professional Email")}
        type="text"
        validate={[ email, required ]}
      />
      <Row>
        <Col lg="6">

          <Field
            name="username"
            component={InputField}
            className="form-control"
            placeholder={t("Username")}
            label={t("Username")}
            type="text"
            validate={[ required ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="email"
            component={InputField}
            className="form-control"
            placeholder={t("Email")}
            label={t("Email")}
            type="text"
            validate={[ email, required ]}
          />
        </Col>
      </Row>
      <Field
        name="password"
        component={InputField}
        className="form-control"
        placeholder={t("Password")}
        label={t("Password")}
        type="password"
        validate={[required, minLength4, maxLength30]}
      />
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          {t("Save Manager")}
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> {t("Clear values")}
        </Button>
      </div>
    </form>
  )
}


TagForm = reduxForm({
  form: 'manager',
  touchOnBlur: false
})(TagForm)

export default connect(
  state => ({
    initialValues: state.manager.item // pull initial values from account reducer
  })
)(TagForm)

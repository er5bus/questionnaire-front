import React from "react"
import PropTypes from 'prop-types'
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button, Spinner, Col, Row } from "reactstrap"
import { useTranslation } from "react-i18next"

import { required, maxLength, minLength } from "./../../../../utils/validations"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"
import InputRadioField from "./../../../../components/InputRadioCheckboxField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

const RegisterForm = (props) => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("register", props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("register"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Field
            name="firstName"
            component={InputField}
            className="form-control"
            icon="fa fa-user"
            placeholder={t("First Name")}
            type="text"
            validate={[ required ]}
          />
        </Col>
        <Col>
          <Field
            name="lastName"
            component={InputField}
            className="form-control"
            icon="fa fa-user"
            placeholder={t("Last Name")}
            type="text"
            validate={[ required ]}
          />
        </Col>
      </Row>
      <Field
        name="username"
        component={InputField}
        className="form-control"
        icon="ni ni-hat-3"
        placeholder={t("Username")}
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
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
      <Field
        name="privacy_policy"
        component={InputRadioField}
        type="checkbox"
        label={t("I agree with the Privacy Policy")}
        value={true}
        validate={[required]}
      />
      <div className="text-center">
        <Button className="mt-4 btn-block" color="primary" type="submit">
          { isLoading && <Spinner color="white" className="mr-2" /> }
          {t("Create account")}
        </Button>
      </div>
    </Form>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default reduxForm({
  form: 'register',
})(RegisterForm)

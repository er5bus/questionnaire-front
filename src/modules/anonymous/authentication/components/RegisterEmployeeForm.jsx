import PropTypes from 'prop-types';
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, Row, Spinner } from "reactstrap";
import { clearSubmitErrors, Field, reduxForm, stopSubmit } from "redux-form";
import Form from "../../../../components/Form";
import InputField from "../../../../components/InputField";
import InputRadioField from "../../../../components/InputRadioCheckboxField";
import { email, maxLength, minLength, required } from "../../../../utils/validations";

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

const RegisterEmployeeForm = (props) => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")) {
      props.dispatch(stopSubmit("register", props.errors.message))
    } else {
      props.dispatch(clearSubmitErrors("register"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Field
            name="emailPro"
            component={InputField}
            className="form-control"
            icon="far fa-envelope"
            placeholder={t("Professional email")}
            type="text"
            validate={[required, email]}
          />
        </Col>
        <Col>
          <Field
            name="emailPerso"
            component={InputField}
            className="form-control"
            icon="far fa-envelope"
            placeholder={t("Personal email")}
            type="text"
            validate={[email]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Field
            name="firstName"
            component={InputField}
            className="form-control"
            icon="fa fa-user"
            placeholder={t("First Name")}
            type="text"
            validate={[required]}
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
            validate={[required]}
          />
        </Col>
      </Row>
      <Field
        name="pseudo"
        component={InputField}
        className="form-control"
        icon="fas fa-user-secret"
        placeholder={t("Pseudo")}
        type="text"
        validate={[required, minLength4, maxLength30]}
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
        name="passwordConfirmation"
        component={InputField}
        className="form-control"
        icon="ni ni-lock-circle-open"
        placeholder={t("Confirm password")}
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
          {isLoading && <Spinner color="white" className="mr-2" />}
          {t("Create account")}
        </Button>
      </div>
    </Form>
  )
}

RegisterEmployeeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}
const validate = values => {
  const errors = {}
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required';
  } else if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'Password mismatched';
  }
  return errors
}
export default reduxForm({
  form: 'registerEmployee',
  validate
})(RegisterEmployeeForm)


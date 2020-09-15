import React from "react"
import PropTypes from 'prop-types'
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button, Spinner, Col, Row } from "reactstrap"

import { required, maxLength, minLength } from "./../../../../utils/validations"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"
import InputRadioField from "./../../../../components/InputRadioCheckboxField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

const RegisterForm = (props) => {

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
            name="professionalEmail"
            component={InputField}
            className="form-control"
            icon="ni ni-email-83"
            placeholder="Email professionnel"
            type="text"
            validate={[ required ]}
          />
        </Col>
        <Col>
          <Field
            name="email"
            component={InputField}
            className="form-control"
            icon="ni ni-email-83"
            placeholder="Email personnel"
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
        placeholder="Nom d'utilisateur"
        type="text"
        validate={[ required, minLength4, maxLength30 ]}
      />
      <Field
        name="password"
        component={InputField}
        className="form-control"
        icon="ni ni-lock-circle-open"
        placeholder="Mot de passe"
        type="password"
        validate={[required, minLength4, maxLength30]}
      />
      <Field
        name="privacy_policy"
        component={InputRadioField}
        type="checkbox"
        label="Je suis d'accord avec la politique de confidentialité"
        value={true}
        validate={[required]}
      />
      <div className="text-center">
        <Button className="mt-4 btn-block" color="primary" type="submit">
          { isLoading && <Spinner color="white" className="mr-2" /> }
          Créer un compte
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

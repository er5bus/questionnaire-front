import React from "react"
import PropTypes from 'prop-types'
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button, Spinner } from "reactstrap"

import { required, maxLength, minLength } from "./../../../../utils/validations"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"
import SelectField from "./../../../../components/SelectField"
import InputCheckboxField from "./../../../../components/InputRadioCheckboxField"

const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

const LoginForm = (props) => {

  const { handleSubmit, isLoading } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("login", props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("login"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="username_or_email"
        component={InputField}
        className="form-control"
        icon="ni ni-email-83"
        placeholder="E-mail ou nom d'utilisateur"
        type="text"
        validate={[ required ]}
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
        name="section"
        component={SelectField}
        className="form-control"
        icon="ni ni-lock-circle-open"
        placeholder="Espace d'administration"
        choices={ [ { label: "Espace employé", value: 1 }, { label: "Espace Manager", value: 2 }, { label: "Espace d'administration", value: 3 } ] } 
        validate={[required, minLength4, maxLength30]}
      />
      <Field
        name="remember_me"
        component={InputCheckboxField}
        label="Souviens-toi de moi"
        value={true}
        type="checkbox"
      />
      <div className="text-center">
        <Button className="mt-4 btn btn-block" color="primary" type="submit">
          { isLoading && <Spinner color="white" className="mr-2" /> }
          Se connecter
        </Button>
      </div>
    </Form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default reduxForm({
  form: 'login',
})(LoginForm)

import PropTypes from 'prop-types';
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Spinner } from "reactstrap";
import { clearSubmitErrors, Field, reduxForm, stopSubmit } from "redux-form";
import Form from "./../../../../components/Form";
import InputField from "./../../../../components/InputField";
import InputCheckboxField from "./../../../../components/InputRadioCheckboxField";
import SelectField from "./../../../../components/SelectField";
import { maxLength, minLength, required } from "./../../../../utils/validations";



const minLength4 = minLength(4)
const maxLength30 = maxLength(30)

const LoginForm = (props) => {

  const { t } = useTranslation()
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
        placeholder={t("Email or Username")}
        type="text"
        validate={[ required ]}
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
        name="section"
        component={SelectField}
        className="form-control"
        icon="ni ni-lock-circle-open"
        placeholder={t("Admin area")}
        choices={ [ { label: "Empolyee area", value: 1 }
        , { label: "Manager area", value: 2 },
         { label: "Admin area", value: 3 } ] } 
        validate={[required, minLength4, maxLength30]}
      />
      <Field
        name="remember_me"
        component={InputCheckboxField}
        label={ t("Remember me") }
        value={true}
        type="checkbox"
      />
      <div className="text-center">
        <Button className="mt-4 btn btn-block" color="primary" type="submit">
          { isLoading && <Spinner color="white" className="mr-2" /> }
          {t("Sign in")}
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

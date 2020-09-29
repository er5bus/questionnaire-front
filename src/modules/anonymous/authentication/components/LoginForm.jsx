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
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")) {
      props.dispatch(stopSubmit("login", props.errors.message))
    } else {
      props.dispatch(clearSubmitErrors("login"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="username_or_email"
        component={InputField}
        className="form-control input-style"
        placeholder={t("E-mail ou nom d'utilisateur")}
        type="text"
        validate={[required]}
      />
      <Field
        name="password"
        component={InputField}
        className="form-control input-style"
        placeholder={t("Mot de passe")}
        type="password"
        validate={[required, minLength4, maxLength30]}
      />
      <Field
        name="section"
        component={SelectField}
        className="form-control input-style"
        icon="ni ni-lock-circle-open"
        placeholder={t("Espace Manager")}
        choices={[{ label: "Espace Empolyee ", value: 1 }
          , { label: "  Espace Manager ", value: 2 },
        { label: "Espace Admin ", value: 3 }]}
        validate={[required, minLength4, maxLength30]}
      />
      <Field
        name="remember_me"
        component={InputCheckboxField}
        label={t("Rester connecté")}
        value={true}
        type="checkbox"
      />
      <div className="d-flex justify-content-center">
        <Button className="mt-4 btn btn-block next-button login-button"  type="submit" style={{
          width:"fit-content"
        }}>
          {isLoading && <Spinner color="white" className="mr-2" />}
          {t("Connenxion")}
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

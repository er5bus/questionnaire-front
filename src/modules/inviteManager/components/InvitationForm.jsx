import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Spinner } from "reactstrap"

import { required, maxLength, minLength } from "./../../../utils/validations"

import Form from "./../../../components/Form"
import InputField from "./../../../components/InputField"
import InputTextareaField from "./../../../components/InputTextareaField"

const minLength2 = minLength(2)
const maxLength200 = maxLength(200)
const maxLength500 = maxLength(500)


let TagForm = (props) => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading, reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("invite-company", props.errors && props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("invite-company"))
    }
  }, [props])

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={InputField}
        className="form-control"
        label={t("Manager email")}
        placeholder={t("E-mail")}
        type="text"
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Field
        name="fullName"
        component={InputField}
        className="form-control"
        label={t("Manager full name")}
        placeholder={t("Full Name.")}
        type="text"
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Field
        name="subject"
        component={InputTextareaField}
        className="form-control"
        label={t("Invitation body")}
        placeholder={t("Describe your invitation")}
        type="text"
        validate={[ required, minLength2, maxLength500 ]}
      />
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-paper-plane mr-2"></i> }
          {t("Send invitation")}
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> {t("Clear values")}
        </Button>
      </div>
    </Form>
  )
}


TagForm = reduxForm({
  form: 'invite-company',
  touchOnBlur: false
})(TagForm)

export default connect(
  state => ({
    initialValues: state.inviteManager.item // pull initial values from account reducer
  })
)(TagForm)

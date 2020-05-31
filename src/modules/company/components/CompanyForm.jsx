import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"

import { Spinner, Col, Row } from "reactstrap"

import { required, maxLength, minLength } from "./../../../utils/validations"
import { COMPANY_TYPE, COMPANY_RANGE, COMPANY_STATUS } from "./../../../constants"

import Form from "./../../../components/Form"
import InputField from "./../../../components/InputField"
import SelectField from "./../../../components/SelectField"
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
      <Row>
        <Col lg="6">
          <Field
            name="name"
            component={InputField}
            className="form-control"
            label={t("Company name")}
            placeholder={t("The human readable name of the company")}
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="universalName"
            component={InputField}
            className="form-control"
            label={t("Company universal name")}
            placeholder={t("The unique string identifier for a company.")}
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>
      <Field
        name="description"
        component={InputTextareaField}
        className="form-control"
        label={t("Company Description")}
        placeholder={t("Describe your company")}
        type="text"
        validate={[ required, minLength2, maxLength500 ]}
      />
      <Row>
        <Col lg="6">
          <Field
            name="companyType"
            component={SelectField}
            className="form-control"
            label={t("Type of company")}
            placeholder={t("Public Company")}
            choices={ COMPANY_TYPE }
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="status"
            component={SelectField}
            className="form-control"
            label={t("Company status")}
            placeholder={t("Operating")}
            choices={ COMPANY_STATUS }
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>
      <Field
        name="employeeCountRange"
        component={SelectField}
        className="form-control"
        label={t("Number range of employees at the company")}
        placeholder={t("2-10")}
        choices={ COMPANY_RANGE }
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Field
        name="specialities"
        component={InputField}
        className="form-control"
        label={t("Company specialties")}
        placeholder={t("Company specialties")}
        type="text"
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Row>
        <Col lg="6">
          <Field
            name="location"
            component={InputField}
            className="form-control"
            label={t("Company location")}
            placeholder={t("Company location")}
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="foundedYear"
            component={InputField}
            className="form-control"
            label={t("Founded Year")}
            placeholder={t("Year listed for the company's founding")}
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>

      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          {t("Save Company")}
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> {t("Clear values")}
        </Button>
      </div>
    </Form>
  )
}


TagForm = reduxForm({
  form: 'company',
  touchOnBlur: false
})(TagForm)

export default connect(
  state => ({
    initialValues: state.company.item // pull initial values from account reducer
  })
)(TagForm)

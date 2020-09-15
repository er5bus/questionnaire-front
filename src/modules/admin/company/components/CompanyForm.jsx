import React from "react"
import { Field, reduxForm, stopSubmit, clearSubmitErrors } from "redux-form"
import { Button } from "reactstrap"
import { connect } from "react-redux"

import { Spinner, Col, Row } from "reactstrap"

import { required, maxLength, minLength } from "./../../../../utils/validations"
import { COMPANY_TYPE, COMPANY_RANGE, COMPANY_STATUS } from "./../../../../constants"

import Form from "./../../../../components/Form"
import InputField from "./../../../../components/InputField"
import SelectField from "./../../../../components/SelectField"
import InputTextareaField from "./../../../../components/InputTextareaField"


const minLength2 = minLength(2)
const maxLength200 = maxLength(200)
const maxLength500 = maxLength(500)


let TagForm = (props) => {

  const { handleSubmit, isLoading, reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.error && props.errors.error.match("bad-request")){
      props.dispatch(stopSubmit("company", props.errors && props.errors.message))
    }else {
      props.dispatch(clearSubmitErrors("company"))
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
            label="Le nom de l'entreprise"
            placeholder="Le nom de l'entreprise"
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="universalName"
            component={InputField}
            className="form-control"
            label="Nom universel de l'entreprise"
            placeholder="Identificateur de chaîne unique pour une entreprise."
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>
      <Field
        name="description"
        component={InputTextareaField}
        className="form-control"
        label="Description de l'entreprise"
        placeholder="Décrivez votre entreprise"
        type="text"
        validate={[ required, minLength2, maxLength500 ]}
      />
      <Row>
        <Col lg="6">
          <Field
            name="companyType"
            component={SelectField}
            className="form-control"
            label="Type de compagnie"
            placeholder="Public Company"
            choices={ COMPANY_TYPE }
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="status"
            component={SelectField}
            className="form-control"
            label="Statut de l'entreprise"
            placeholder="Operating"
            choices={ COMPANY_STATUS }
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>
      <Field
        name="employeeCountRange"
        component={SelectField}
        className="form-control"
        label="Gamme de nombres d'employés dans l'entreprise"
        placeholder="2-10"
        choices={ COMPANY_RANGE }
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Field
        name="specialities"
        component={InputField}
        className="form-control"
        label="Spécialités de l'entreprise"
        placeholder="Spécialités de l'entreprise"
        type="text"
        validate={[ required, minLength2, maxLength200 ]}
      />
      <Row>
        <Col lg="6">
          <Field
            name="location"
            component={InputField}
            className="form-control"
            label="Emplacement de la société"
            placeholder="Emplacement de la société"
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="6">
          <Field
            name="foundedYear"
            component={InputField}
            className="form-control"
            label="Année de fondation"
            placeholder="Année inscrite pour la création de l'entreprise"
            type="text"
            validate={[ required, minLength2, maxLength200 ]}
          />
        </Col>
      </Row>

      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          Enregistrer l'entreprise
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> Effacer les valeurs
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

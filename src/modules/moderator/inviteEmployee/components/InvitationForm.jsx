import React from 'react'
import { Field, reduxForm, stopSubmit, clearSubmitErrors, FieldArray, arrayInsert, formValueSelector } from 'redux-form'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

import { Spinner, Row, Col } from 'reactstrap'


import { required, maxLength, minLength, email } from './../../../../utils/validations'

import CSVReader from './../../../../components/CSVReader'
import Form from './../../../../components/Form'
import InputField from './../../../../components/InputField'
import InputTextareaField from './../../../../components/InputTextareaField'

const minLength2 = minLength(2)
const maxLength200 = maxLength(200)
const maxLength500 = maxLength(500)


const renderInvitations = ({ fields }) => (
  <div>
    <div className="mt-4">
      <Button onClick={() => fields.push({})} color="primary" type="button">
        <i className="fas fa-plus-circle" />
        {" "} Ajouter une invitation
      </Button>
    </div>
    {fields.map((invitation, index) => (
      <Row key={index} className="mt-4">
        <Col lg="6">
          <Field
            name={`${invitation}.email`}
            component={InputField}
            className="form-control"
            label="E-mail du employee"
            placeholder="E-mail"
            type="text"
            validate={[ required, email, minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="5">
          <Field
            name={`${invitation}.fullName`}
            component={InputField}
            className="form-control"
            label="Nom complet du employee"
            placeholder="Nom complet."
            type="text"
            validate={[ minLength2, maxLength200 ]}
          />
        </Col>
        <Col lg="1">
          <Button className="form-controle-button mt-4" onClick={() => fields.remove(index)} color="danger" type="button">
            <i className="fas fa-trash" />
          </Button>
        </Col>
      </Row>
    ))}
  </div>
)


let InvitationForm = (props) => {

  const { handleSubmit, isLoading, arrayInsertItem, invitations = [], reset } = props

  React.useEffect(() => {
    if (props.errors && props.errors.code && props.errors.code.match("bad-request")){
      props.dispatch(stopSubmit("invite-company", props.errors && props.errors.constraints))
    }else {
      props.dispatch(clearSubmitErrors("invite-company"))
    }
  }, [props])

  const handleOnFileLoad = (data = []) => {
    const emailInvitations = invitations.map(value => value.email)
    data.forEach((value, i) => {
      const emailField = value.data.find((data) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data))
      if (emailField && !emailInvitations.includes(emailField)){
        arrayInsertItem("invite-company", "invitations", i, { email: emailField })
      }
    })
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err, file, inputElem, reason)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <CSVReader onFileLoad={handleOnFileLoad} onError={handleOnError} />
      <FieldArray name="invitations" component={renderInvitations} />
      <div className="mt-4" />
      <Field
        name="subject"
        component={InputTextareaField}
        className="form-control"
        label="Corps d'invitation"
        placeholder="Décrivez votre invitation"
        type="text"
        validate={[ required, minLength2, maxLength500 ]}
      />
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-paper-plane mr-2"></i> }
          Envoyer une invitation
        </Button>
        <Button className="mt-4 pl-5 pr-5" color="warning" onClick={reset}>
          <i className="fas fa-trash mr-2"></i> Effacer les valeurs
        </Button>
      </div>
    </Form>
  )
}


InvitationForm = reduxForm({
  form: 'invite-company',
  touchOnBlur: false
})(InvitationForm)

export default connect(
  state => {
    const selector = formValueSelector('invite-company')
    return ({
      invitations: selector(state, 'invitations'),
      initialValues: state.inviteEmployee.item // pull initial values from account reducer
    })
  },
  {
    arrayInsertItem: arrayInsert,
  }
)(InvitationForm)

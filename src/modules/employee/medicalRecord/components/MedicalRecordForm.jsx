import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useTranslation } from 'react-i18next'

// Bootstrap
import { Spinner, Button } from 'reactstrap'

import { required, email } from "./../../../../utils/validations"

import InputField from "./../../../../components/InputField"

const MedicalRecordForm = props => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading } = props
  
  return (
    <>
      <form onSubmit={handleSubmit}>
      <Field
        name="weight"
        component={InputField}
        className="form-control"
        placeholder={t("What is your weight ?")}
        label={t("Weight")}
        type="text"
        validate={[ required ]}
      />
      <Field
        name="tall"
        component={InputField}
        className="form-control"
        placeholder={t("How tall are you ?")}
        label={t("Height")}
        type="text"
        validate={[ required ]}
      />
      <Field
        name="bloodType"
        component={InputField}
        className="form-control"
        placeholder={t("What is your blood type ?")}
        label={t("Blood type")}
        type="text"
        validate={[ email, required ]}
      />
      <div className="mt-0">
        <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
          { isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i> }
          {t("Save")}
        </Button>
      </div>
    </form>
    </>
  )
}

export default reduxForm({
  form: 'medicalRecord',
})(MedicalRecordForm)

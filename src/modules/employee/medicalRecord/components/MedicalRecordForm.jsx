import React, { useEffect } from 'react';
// Bootstrap
import { Button, Spinner } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import InputField from "./../../../../components/InputField";
import InputRadioCheckboxField from './../../../../components/InputRadioCheckboxField';
import Label from "./../../../../components/Label";
import SelectField from "./../../../../components/SelectField";
import { number, required } from "./../../../../utils/validations";


const MedicalRecordForm = props => {

  const { handleSubmit, isLoading } = props
  useEffect(() => {
    props.initialize({ sexe: '1' })
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label>Le sexe. Vous êtes : (une femme - un homme)</Label>
        <div className="form-inline mb-3">
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control"
            label="Un homme"
            type="radio"
            value="1"
          />
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control"
            placeholder=""
            label="Une femme"
            type="radio"
            value="2"
          />
        </div>
        <Field
          name="age"
          component={InputField}
          className="form-control"
          placeholder="Quel âge avez-vous ?"
          label="L'âge"
          type="text"
          validate={[required, number]}
        />
        <Field
          name="tall"
          component={InputField}
          className="form-control"
          placeholder="Quelle est votre taille ?"
          label="La taille"
          type="text"
          validate={[required, number]}
        />
        <Field
          name="weight"
          component={InputField}
          className="form-control"
          placeholder="Quel est votre poids ?"
          label="Le poids"
          type="text"
          validate={[required, number]}
        />
        <Field
          name="profession"
          component={InputField}
          className="form-control"
          placeholder="Quelle est votre profession ?"
          label="Le secteur d’activité."
          type="text"
          validate={[required]}
        />
        <Field
          name="homeWork"
          component={SelectField}
          className="form-control"
          placeholder="Faites-vous du télétravail ? (oui, souvent - oui, parfois - non)"
          label="La situation du salarié face au télétravail."
          choices={[{ label: "Oui", value: 1 }, { label: "Souvent", value: 2 }, { label: "Parfois", value: 3 }]}
          validate={[required]}
        />
        <div className="mt-0">
          <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
            {isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i>}
            Save
          </Button>
        </div>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'medicalRecord',
})(MedicalRecordForm)

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Bootstrap
import { Button, Spinner } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import InputField from "./../../../../components/InputField";
import InputRadioCheckboxField from './../../../../components/InputRadioCheckboxField';
import Label from "./../../../../components/Label";
import SelectField from "./../../../../components/SelectField";
import { number, required } from "./../../../../utils/validations";





const MedicalRecordForm = props => {

  const { t } = useTranslation()
  const { handleSubmit, isLoading } = props
  useEffect(() => {
    props.initialize({ sexe: '1' })
  }, []);
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label> Vous êtes:</Label>
        <div className="form-inline mb-3">
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control input-style"
            label={t("Homme")}
            type="radio"
            value="1"
          />
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control input-style"
            placeholder={t("")}
            label={t("Femme")}
            type="radio"
            value="2"
          />
        </div>
        <Field
          name="age"
          component={InputField}
          className="form-control input-style"
          label={t("Quel âge avez-vous ? ")}
          type="text"
          validate={[required, number]}
        />
        <Field
          name="tall"
          component={InputField}
          className="form-control input-style"
          label={t("Quelle est votre taille ?")}
          type="text"
          validate={[required, number]}
          
        />
        <Field
          name="weight"
          component={InputField}
          className="form-control input-style"
          label={t("Quel est votre poids ?")}
          type="text"
          validate={[required, number]}
        />
        <Field
          name="profession"
          component={InputField}
          className="form-control input-style"
          label={t("Quelle est votre profession ?")}
          type="text"
          validate={[required]}
        />
        <Field
          name="homeWork"
          component={SelectField}
          className="form-control input-style"
          label={t("Faites-vous du télétravail ")}
          choices={[{ label: "Oui", value: 1 }, { label: "Souvent", value: 2 }, { label: "Parfois", value: 3 }, { label: "Non", value: 4 }]}
          validate={[required]}
        />
        <div className="mt-0">
          <Button className="mt-4 pl-5 pr-5" color="primary" type="submit">
            {isLoading ? <Spinner color="white mr-2" /> : <i className="fas fa-save mr-2"></i>}
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

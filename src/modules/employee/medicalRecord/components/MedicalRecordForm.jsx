import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
// Bootstrap
import { Button, Col, Row, Spinner } from 'reactstrap';
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
  const { t } = useTranslation()

  return (
    <>
      <div className="medical-title">
        <h3>Votre Profil</h3>
        <p>Remplissez vos informations personnelles</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Label> Vous êtes:</Label>
        <div className="form-inline mb-3">
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control input-radio"
            label={t("Homme")}
            type="radio"
            value="1"
          />
          <Field
            name="sexe"
            component={InputRadioCheckboxField}
            className="form-control input-radio"
            placeholder={t("")}
            label={t("Femme")}
            type="radio"
            value="2"
          />
        </div>
        <Row>
          <Col md="6" xs="12">

            <Field
              name="age"
              component={InputField}
              className="form-control input-style"
              label={t("Quel âge avez-vous ? ")}
              type="text"
              validate={[required, number]}
            />
          </Col>
        </Row>
        <Row>
          <Col md="6" xs="12">
            <Field
              name="tall"
              component={InputField}
              className="form-control input-style"
              label={t("Quelle est votre taille ?")}
              type="text"
              validate={[required, number]}

            />
          </Col>
          <Col md="6" xs="12">
            <Field
              name="weight"
              component={InputField}
              className="form-control input-style"
              label={t("Quel est votre poids ?")}
              type="text"
              validate={[required, number]}
            />
          </Col>
        </Row>

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
          <Button className="mt-4 next-button next-button-position" color="primary" type="submit">
            {isLoading && <Spinner color="white mr-2" />}
            {t("Suivant")}
          </Button>
        </div>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'medicalRecord',
})(MedicalRecordForm)

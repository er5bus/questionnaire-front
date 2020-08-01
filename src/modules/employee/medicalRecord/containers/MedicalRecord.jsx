import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
// reactstrap components
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col, Container, Row } from "reactstrap";
import Loader from "../../../../components/Loader";
import { createMedicalRecord, retriveMedicalRecord } from '../actions';
import employeeRoutes from './../../../../routes/employee';
import MedicalRecordForm from './../components/MedicalRecordForm';



class MedicalRecord extends React.Component {
  componentDidMount() {
    this.props.retriveMedicalRecord()

  }
  onSubmit = (values) => {
    this.props.createMedicalRecord(values);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.medicalRecordCreated !== nextProps.medicalRecordCreated) {
      this.props.history.push(employeeRoutes.path + employeeRoutes.routes.questionnaire.path)
    }

  }


  render() {
    const { error, t, isLoading, isLoadingRecord, medicalRecordCreated } = this.props

    return (
      <>
        {isLoadingRecord && Object.entries(medicalRecordCreated).length !== 0 ? <Loader></Loader> :
          <>
            <div className="header bg-primary pb-5">
              <Container fluid>
                <div className="header-body">
                  <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> {t("Medical Record")} </h6>
                  <Row className="align-items-center py-2">
                    <Col lg="6">
                      <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                        <BreadcrumbItem active><i className="fas fa-save"></i> {t("Save Your Medical Record")}</BreadcrumbItem>
                      </Breadcrumb>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <Container className="mt--4" fluid>
              <Row className="justify-content-center">
                <Col lg="12" md="12">
                  <Card className="shadow">
                    <CardBody className="px-lg-5 py-lg-5">
                      <MedicalRecordForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>}

      </>
    )
  }
}


const mapStateToProps = state => state.medicalRecord



export default connect(mapStateToProps, { retriveMedicalRecord, createMedicalRecord })(withTranslation()(MedicalRecord))

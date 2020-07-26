import React from "react"
import { connect } from "react-redux"
import { withTranslation } from "react-i18next"

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import MedicalRecordForm from './../components/MedicalRecordForm'

import employeeRoutes from './../../../../routes/employee'

class MedicalRecord extends React.Component {

  onSubmit = (values) => {
    this.props.history.push( employeeRoutes.path + employeeRoutes.routes.questionnaire.path )
  }

  render() {
    const { error, t, isLoading } = this.props
    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t("Medical Record") } </h6>
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
      </>
    )
  }
}


const mapStateToProps = state => state.medicalRecord

export default connect(mapStateToProps)(withTranslation()(MedicalRecord))

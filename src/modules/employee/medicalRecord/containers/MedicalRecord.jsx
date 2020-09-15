import React from "react";
import { connect } from "react-redux";
// reactstrap components
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col, Container, Row } from "reactstrap";
import Loader from "../../../../components/Loader";
import { createMedicalRecord, retriveMedicalRecord } from '../actions';
import employeeRoutes from './../../../../routes/employee';
import MedicalRecordForm from './../components/MedicalRecordForm';



class MedicalRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingData: true
    }
  }
  componentDidMount() {
    this.props.retriveMedicalRecord()
  }
  onSubmit = (values) => {
    this.props.createMedicalRecord(values);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.medicalRecordCreated !== nextProps.medicalRecordCreated) {
      if (Object.entries(nextProps.medicalRecordCreated).length !== 0) {
        this.props.history.push(employeeRoutes.path + employeeRoutes.routes.questionnaire.path)
      } else {
        this.setState({ isLoadingData: false })

      }

    }

  }


  render() {
    const { error, isLoading, isLoadingRecord } = this.props

    return (
      <>
        {this.state.isLoadingData && isLoadingRecord ? <Loader></Loader> :
          <>
            <div className="header bg-primary pb-5">
              <Container fluid>
                <div className="header-body">
                  <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> Dossier médical </h6>
                  <Row className="align-items-center py-2">
                    <Col lg="6">
                      <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                        <BreadcrumbItem active><i className="fas fa-save"></i> Sauvegardez votre dossier médical </BreadcrumbItem>
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



export default connect(mapStateToProps, { retriveMedicalRecord, createMedicalRecord })(MedicalRecord)

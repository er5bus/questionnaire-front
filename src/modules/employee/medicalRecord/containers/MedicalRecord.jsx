import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
// reactstrap components
import { Card, CardBody, Col, Container, Row } from "reactstrap";
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
    const { error, t, isLoading, isLoadingRecord, medicalRecordCreated } = this.props

    return (
      <>
        {this.state.isLoadingData && isLoadingRecord ? <Loader></Loader> :
          <>

            <Container className="mt--4" >
              <Row className="justify-content-center">
                <Col lg="12" md="12">
                  <Card className="shadow card-shadow-style" style={{
                    position: "relative"
                  }}>
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

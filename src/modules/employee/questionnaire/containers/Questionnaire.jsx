import React from 'react'
import { connect } from 'react-redux'
//import { Redirect, Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

//import employeeRoutes from './../../../../routes/employee'

import FirstQuestion from './../components/FirstQuestion'
import ExitQuestions from './../components/ExitQuestions'

// reactstrap components
import { Card, Row, CardBody, Col, Container } from 'reactstrap'

class Questionnaire extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      exit: false 
    }
  }

  onSubmit = (values) => {
    //this.props.createEmployee(values)
  }

  onExit = () => {
    this.setState({ exit: true })
  }

  render() {
    const { t/*, error, item, isLoading*/ } = this.props
    const { exit } = this.state

    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t("Scaling questions") } </h6>
            </div>
          </Container>
        </div>
        <Container className="mt--4" fluid>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <Card className="shadow">
                <CardBody className="px-lg-5 py-lg-5">
                  { !exit && <FirstQuestion onExit={this.onExit} />}
                  { exit && <ExitQuestions /> }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps)(withTranslation()(Questionnaire))

import React from 'react';
//import { Redirect, Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// reactstrap components
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import FourthPage from '../components/FourthPage';
import { exitPage, nextPage, prevPage } from './../actions';
import ExitPage from './../components/ExitPage';
//import employeeRoutes from './../../../../routes/employee'
import FirstPage from './../components/FirstPage';
import SecondPage from './../components/SecondPage';
import ThirdPage from './../components/ThirdPage';




class Questionnaire extends React.Component {

  onSubmit = (values) => {
    //this.props.create(values)
  }

  onNext = () => {
    this.props.nextPage()
  }

  onPrev = () => {
    this.props.prevPage()
  }

  onExit = () => {
    this.props.exitPage()
  }

  render() {
    const { t, page, exit /*, error, item, isLoading*/ } = this.props

    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> {t("Scaling questions")} </h6>
            </div>
          </Container>
        </div>
        <Container className="mt--4" fluid>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <Card className="shadow" style={{
                minHeight:300
              }}>
                <CardBody className="px-lg-5 py-lg-5">
                  {page === 1 && <FirstPage onExit={this.onExit} onContinue={this.onNext} />}
                  {page === 2 && <SecondPage onExit={this.onExit} onContinue={this.onNext} />}
                  {page === 3 && <ThirdPage onExit={this.onExit} onContinue={this.onNext} />}
                  {page === 4 && <FourthPage onExit={this.onExit} onContinue={this.onNext} />}
                  {exit && <ExitPage />}
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

export default connect(mapStateToProps, { nextPage, prevPage, exitPage })(withTranslation()(Questionnaire))

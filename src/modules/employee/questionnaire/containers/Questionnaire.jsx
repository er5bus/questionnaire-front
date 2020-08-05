import React from 'react';
//import { Redirect, Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// reactstrap components
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import FourthPage from '../components/FourthPage';
import NutritionalPage from '../components/NutritionalPage';
import QuestionHead from '../components/QuestionHead';
import { otherQuestionsTreeNode } from '../constants';
import { changeCurrentQuestion, changePage, exitPage, nextOtherQuestionsSection, nextPage, prevPage } from './../actions';
import ExitPage from './../components/ExitPage';
//import employeeRoutes from './../../../../routes/employee'
import FirstPage from './../components/FirstPage';
import SecondPage from './../components/SecondPage';
import ThirdPage from './../components/ThirdPage';



class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titlePage: "",
      showWhitePage: false,
      fade: false
    }
  }

  onSubmit = (values) => {
    //this.props.create(values)
  }

  onNext = () => {
    this.props.nextPage()
  }

  onPrev = () => {
    this.props.prevPage()
  }
  onContinueFirstPage = () => {
    
    this.props.nextOtherQuestionsSection();
    this.onNext()
  }
  changePage = () => {
    this.props.changeCurrentQuestion(otherQuestionsTreeNode["ERGONOMIE"])
    this.props.changePage(4)
  }
  onExit = () => {
    this.props.exitPage()
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.page, "pagee");
    if (nextProps.page !== this.props.page && nextProps.page > 2) {
      this.setState({ showWhitePage: true, fade: false })
      this.setState({ titlePage: this.titleWhitePage(nextProps.page) })
      setTimeout(() => {
        this.setState({ fade: true })
      }, 1000);
      setTimeout(() => {
        this.setState({ showWhitePage: false })
      }, 2500);
    }
  }
  titleWhitePage = (page) => {

    switch (page) {
      case 3:
        return "Questionnaire Santé"
      case 4:
        return 'Questionnaire Ergonomie '
      case 5:
        return "Questionnaire Psychologie"
      case 6:
        return 'Questionnaire Activité Physique '
      case 7:
        return 'Questionnaire Nutritionnelle'
      default:
        break;
    }
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
                minHeight: 300
              }}>

                <CardBody className="px-lg-5 py-lg-5">
                  {this.state.showWhitePage ?
                    <div className={`d-flex justify-content-center align-items-center ${this.state.fade ? "fade-out" : "fade-in"}  `} style={{
                      height: 240
                    }}>
                      <QuestionHead title={this.state.titlePage} pageTitle={true} />
                    </div>
                    :
                    <>
                      {page === 1 && <FirstPage onExit={this.changePage} onContinue={this.onContinueFirstPage} />}
                      {page === 2 && <SecondPage onExit={this.onExit} onContinue={this.onNext} />}
                      {page === 3 && <ThirdPage onExit={this.onExit} onContinue={this.onNext} />}
                      {(page === 4 || page === 5 || page === 6) && <FourthPage onExit={this.onExit} onContinue={this.onNext} />}
                      {page === 7 && <NutritionalPage />}
                      {exit && <ExitPage />}
                    </>
                  }

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

export default connect(mapStateToProps, { nextPage, prevPage, exitPage, changePage, nextOtherQuestionsSection, changeCurrentQuestion })(withTranslation()(Questionnaire))

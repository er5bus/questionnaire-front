import React from 'react';
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import { askContinueScreen, changeCurrentQuestion, changePage, fetchQuestion, nextOtherQuestionsSection, nextSectionFourth, saveQuestionAnswered, updateScore } from '../actions';
import { otherQuestionsTreeNode } from '../constants';
import AskContinue from './AskContinue';
import QuestionDisplay from './QuestionDisplay';
import QuestionHead from "./QuestionHead";



class FourthPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextSection: false,
      titleAsk: ""
    }
  }
  componentDidMount() {
    if (this.props.nextSectionFourthState) {
      // this.props.nextOtherQuestionsSection()
      // this.setState({ nextSection: true })
      this.setState({ titleAsk: this.returnTextAsk(this.props.page) })
      return
    }

    const { currentQuestion } = this.props
    this.props.fetchQuestion(currentQuestion)
  }
  returnTextAsk = (currentPage) => {
    switch (currentPage) {
      case 4:
        return "Vous avez déjà répondu à des questions ergonomique "
      case 5:
        return "Vous avez complété le questionnaire concernant les risques psycho-sociaux"
      case 6:
        return "Vous avez compléte le questionnaire sur l'activité physique"
      default:
        break;
    }
  }
  onContinue = () => {
    if (this.props.otherSectionQuestionToUse.length > 0) {
      this.props.changePage(this.props.otherSectionQuestionToUse[0].page)
      this.props.nextSectionFourth(false)
    } else {
      this.props.changePage(7)
    }

  }
  componentDidUpdate(prevProps) {
    const { currentQuestion } = this.props
    const { currentQuestion: prevCurrentQuestion } = prevProps
    if (currentQuestion && prevCurrentQuestion) {
      if (currentQuestion.nodeparam !== null && prevCurrentQuestion.nodeparam !== null) {
        if (currentQuestion.nodeparam !== prevCurrentQuestion.nodeparam) {
          this.props.fetchQuestion(currentQuestion)
        }
      }

    }

  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.otherSectionQuestionToUse !== this.props.otherSectionQuestionToUse) {
      this.setState({ titleAsk: this.props.otherSectionQuestionToUse[0].value })
      if (nextProps.otherSectionQuestionToUse.length > 0) {
        let currentQuestion = otherQuestionsTreeNode[nextProps.otherSectionQuestionToUse[0].id]
        this.props.changeCurrentQuestion(currentQuestion);

        this.props.nextSectionFourth(true)
        setTimeout(() => {
          this.props.askContinueScreen()
        }, 2000);

      } else {
        this.props.nextSectionFourth(true)
        setTimeout(() => {

          this.props.askContinueScreen()
        }, 2000);

      }
    }
  }
  onSelectChoice = (item, action) => {

    let pageAction = this.props.page
    let questionAction = item;
    let nameAction = action.name;
    let scoreAction = 0;
    let idAction = action.id

    if (action.values.length > 0) {
      let actionValues = action.values.map(el => {
        return { id: el.score.id, value: el.value, name: el.score.name }
      })
      actionValues.forEach(element => {
        scoreAction = scoreAction + Number(element.value)
      });
      this.props.updateScore(actionValues)
    }
    this.props.saveQuestionAnswered({
      page: pageAction,
      question: questionAction,
      name: nameAction,
      score: scoreAction,
      id: idAction
    })
    let { currentQuestion } = this.props
    if (action.pointToTree && Object.keys(action.pointToTree).length !== 0) {
      currentQuestion = { nodeparam: action.pointToTree.firstNode.uid, treeparam: action.pointToTree.uid }
      this.props.changeCurrentQuestion(currentQuestion)
    } else if (action.pointToNode && Object.keys(action.pointToNode).length !== 0) {
      currentQuestion = { ...currentQuestion, nodeparam: action.pointToNode.uid }
      this.props.changeCurrentQuestion(currentQuestion)

    } else if (action.pointToType === "NOTHING" && action.pointToNode == null && action.pointToTree == null) {
      this.props.nextOtherQuestionsSection();
    }
  }
  render() {
    const { isLoading, item } = this.props

    return (
      <>
        {!this.props.nextSectionFourthState ? (
          <Row className="justify-content-center">
            <Col lg="12">
              {this.props.otherSectionQuestionToUse.length > 0 && <QuestionHead title={`${this.props.otherSectionQuestionToUse[0].value} `} pageTitle={false} />}
              <QuestionDisplay
                item={item}
                onSelectChoice={this.onSelectChoice}
                isLoading={isLoading}
              />
            </Col>
          </Row>
        ) : <div className="ask-parent">
          <AskContinue title={`${this.state.titleAsk}, passez à l'étape suivante`}
            onContinue={this.onContinue} onExit={this.props.onExit}  >
          </AskContinue>
        </div>}
      </>
    )
  }
}


const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { fetchQuestion, changeCurrentQuestion, nextOtherQuestionsSection, askContinueScreen, updateScore, changePage, saveQuestionAnswered, nextSectionFourth })(FourthPage)

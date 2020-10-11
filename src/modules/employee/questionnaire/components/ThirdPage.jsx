import React from "react";
import { connect } from "react-redux";
// reactstrap components
import { Col, Row } from "reactstrap";
import Loader from '../../../../components/Loader';
import { otherQuestionsTreeNode, statcTreeNode } from "../constants";
import { askContinueScreen, changeCurrentQuestion, changePage, fetchQuestion, fetchQuestionScores, nextSectionThird, nextSelectedFromBodyQuestions, saveQuestionAnswered, updateScore } from "./../actions";
import AskContinue from './AskContinue';
import QuestionDisplay from './QuestionDisplay';
import QuestionHead from "./QuestionHead";
class OverviewNode extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      scores: [],
      nextSection: false
    }
  }

  componentDidMount() {
    const { currentQuestion } = this.props
    this.props.fetchQuestion(currentQuestion)
    //this.props.fetchQuestionScores(currentQuestion)
  }

  checkLogicNode = (item) => {
    /*const { treeparam } = this.props.match.params
    let noRuleMatch = true
    if (item.rules){
      item.rules.forEach((rule) => {
        if ( this.checkOperatorLogicNode(rule.value, this.state.scores[rule.score.id], rule.operator )){
          if (rule.point_to_type === POINT_TO.CONTENT_NODE || rule.point_to_type === POINT_TO.LOGIC_NODE ){
            this.props.history.push( userRoutes.path + userRoutes.routes.nodeOverview.path
              .replace(":treeparam", treeparam)
              .replace(":nodeparam", rule.point_to_node.uid))
          }else if (rule.point_to_type === POINT_TO.TREES){
            this.props.history.push( userRoutes.path + userRoutes.routes.nodeOverview.path
              .replace(":treeparam", rule.point_to_tree.uid)
              .replace(":nodeparam", rule.point_to_tree.first_node.uid))
          }
          noRuleMatch = false
          return;
        }
      })
    }
    if (noRuleMatch && (item.default_point_to_type === POINT_TO.CONTENT_NODE || item.default_point_to_type === POINT_TO.LOGIC_NODE)){
      this.props.history.push(userRoutes.path + userRoutes.routes.nodeOverview.path
        .replace(":treeparam", treeparam)
        .replace(":nodeparam", item.default_node.uid))
    }else if (noRuleMatch && item.default_point_to_type === POINT_TO.TREES){
      this.props.history.push(userRoutes.path + userRoutes.routes.nodeOverview.path
        .replace(":treeparam", item.default_tree.uid)
        .replace(":nodeparam", item.default_tree.first_node.uid))
    }*/
  }

  checkOperatorLogicNode = (ruleValue, scoreValue, operator) => {
    switch (operator) {
      case "=": {
        return ruleValue === scoreValue
      }
      case "!=": {
        return ruleValue !== scoreValue
      }
      case ">": {
        return ruleValue > scoreValue
      }
      case "<": {
        return ruleValue < scoreValue
      }
      case ">=": {
        return ruleValue >= scoreValue
      }
      case "=<": {
        return ruleValue <= scoreValue
      }
      default: {
        return false
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { currentQuestion, } = this.props
    const { currentQuestion: prevCurrentQuestion } = prevProps

    if (currentQuestion.nodeparam && prevCurrentQuestion.nodeparam && currentQuestion.nodeparam !== prevCurrentQuestion.nodeparam) {
      this.props.fetchQuestion(currentQuestion)
    }
    /*if (newItem && newItem.type === NODE_TYPE.LOGIC_NODE){
      this.checkLogicNode(newItem)
    }*/
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPartBodyToUse !== this.props.selectedPartBodyToUse) {
      if (nextProps.selectedPartBodyToUse.length > 0 && nextProps.selectedPartBodyIDToUse.length > 0) {
        let currentQuestion = statcTreeNode[nextProps.selectedPartBodyIDToUse[0]]
        this.props.changeCurrentQuestion(currentQuestion)
      } else {
        this.props.nextSectionThird(true)
        setTimeout(() => {
          this.props.askContinueScreen()
        }, 1500);
      }

    }
  }
  onContinue = () => {
    let currentQuestion = otherQuestionsTreeNode[this.props.otherSectionQuestionToUse[0].id]
    this.props.changeCurrentQuestion(currentQuestion)
    this.props.changePage(this.props.otherSectionQuestionToUse[0].page)
  }
  onSelectChoice = (item, action) => {
  

    let pageAction = this.props.page
    let questionAction = item;
    let nameAction = action.name;
    let scoreAction = 0
    let idAction = action.id
    if (action.values.length > 0 && this.props.selectedPartBodyIDToUse[0] === this.props.selectedPartBodyID[0]) {
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
      id: idAction,
      type: this.props.selectedPartBodyIDToUse[0]
    })

    let { currentQuestion } = this.props
    if (action.pointToType && (action.pointToType !== "NOTHING") && action.pointToTree && Object.keys(action.pointToTree).length !== 0) {
      currentQuestion = { nodeparam: action.pointToTree.firstNode.uid, treeparam: action.pointToTree.uid }
      this.props.changeCurrentQuestion(currentQuestion)
    } else if (action.pointToType && (action.pointToType !== "NOTHING") && action.pointToNode && Object.keys(action.pointToNode).length !== 0) {
      currentQuestion = { ...currentQuestion, nodeparam: action.pointToNode.uid }
      this.props.changeCurrentQuestion(currentQuestion)
    } else if (!action.pointToType || (action.pointToNode == null && action.pointToTree == null) || (action.pointToType === "NOTHING")) {
      this.props.nextSelectedFromBodyQuestions();
    }
  }

  render() {
    const { item, isLoading, isLoadingSectionBody, scores } = this.props
  

    return (
      <> {isLoadingSectionBody ? <Loader /> :
        <>
          {!this.props.nextSectionThirdState ? (
            <Row className="justify-content-center">
              <Col lg="12">
                {this.props.selectedPartBodyToUse.length > 0 && <QuestionHead title={`Questionnaire santé pour  ${this.props.selectedPartBodyToUse[0]} `} pageTitle={false} />}
                <QuestionDisplay
                  item={item}
                  onSelectChoice={this.onSelectChoice}
                  isLoading={isLoading}
                />
              </Col>
            </Row>
          ) : <div className="ask-parent" >
              <AskContinue title={"Vous avez complété le questionnaire concernant les TMS, passez à l'étape suivante"}
                onContinue={this.onContinue} onExit={this.props.onExit}  >
              </AskContinue>
            </div>} </>}


      </>
    )
  }
}


const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps, { fetchQuestion, fetchQuestionScores, changeCurrentQuestion, nextSelectedFromBodyQuestions, askContinueScreen, updateScore, changePage, saveQuestionAnswered, nextSectionThird })(OverviewNode)

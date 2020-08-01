import React from "react";
import { connect } from "react-redux";
// reactstrap components
import { Col, Row } from "reactstrap";
import Loader from '../../../../components/Loader';
import { statcTreeNode } from "../constants";
import { askContinueScreen, changeCurrentQuestion, fetchQuestion, fetchQuestionScores, nextSelectedFromBodyQuestions, updateScore } from "./../actions";
import AskContinue from './AskContinue';
import QuestionDisplay from './QuestionDisplay';
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
    this.props.fetchQuestionScores(currentQuestion)
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

    if (currentQuestion.treeparam && prevCurrentQuestion.treeparam && currentQuestion.treeparam !== prevCurrentQuestion.treeparam) {
      this.props.fetchQuestionScores(currentQuestion)
    }

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
        this.setState({ nextSection: true }, () => {
          setTimeout(() => {
            this.props.askContinueScreen()
          }, 2000);
        })
      }

    }
  }

  onSelectChoice = (item, action) => {
    if (action.values.length > 0 && this.props.selectedPartBodyIDToUse[0] === this.props.selectedPartBodyID[0]) {
      let actionValues = action.values.map(el => {
        return { id: el.score.id, value: el.value }
      })
      this.props.updateScore(actionValues)
    }
    
    let { currentQuestion } = this.props
    if (action.pointToTree && Object.keys(action.pointToTree).length !== 0) {
      currentQuestion = { nodeparam: action.pointToTree.firstNode.uid, treeparam: action.pointToTree.uid }
      this.props.changeCurrentQuestion(currentQuestion)
    } else if (action.pointToNode && Object.keys(action.pointToNode).length !== 0) {
      currentQuestion = { ...currentQuestion, nodeparam: action.pointToNode.uid }
      this.props.changeCurrentQuestion(currentQuestion)
    } else if (action.pointToType === "NOTHING" && action.pointToNode == null && action.pointToTree == null) {
      this.props.nextSelectedFromBodyQuestions();
    }
  }

  calculateScore = (action) => {
    let newArray = this.state.scores
    let arrayToTest = action.values.map(el => {
      return { id: el.score.id, value: el.value }
    })

    if (action.values.length > 0) {
      if (newArray.length > 0) {
        for (let i = 0; i < arrayToTest.length; i++) {
          let exist = newArray.filter(el => el.id === arrayToTest[i].id);
          console.log(exist, "existt");

          if (exist.length = 0) {
            // newArray[exist] = { id: newArray[exist].id, value: newArray[exist].value + arrayToTest[i].value }
          } else {
            newArray.push(arrayToTest[i])
          }
        }
      } else {
        newArray = action.values.map(el => {
          return { id: el.score.id, value: el.value }
        })
      }
      this.setState({ scores: newArray }, () => console.log(this.state.scores, 'aasdsdsdsdsd'))
    }
    console.log(this.state.scores, "nonnn");

  }

  render() {
    const { item, isLoading, isLoadingSectionBody } = this.props
    return (
      <> {this.props.isLoadingSectionBody ? <Loader /> :
        <>
          {!this.state.nextSection ? (
            <Row className="justify-content-center">
              <Col lg="12">
                {this.props.selectedPartBodyToUse.length > 0 && (
                  <div style={{
                    textAlign: "center"
                  }}>
                    <p className="text-primary" style={{
                      fontSize: 19,
                      fontWeight: "bold"
                    }}> Questions about: {this.props.selectedPartBodyToUse[0]} </p>
                  </div>
                )}
                <QuestionDisplay
                  item={item}
                  onSelectChoice={this.onSelectChoice}
                  isLoading={isLoading}
                />
              </Col>
            </Row>
          ) : <div>
              <AskContinue title={"Vous avez déjà répondu à des questions sur les douleurs corporelles, souhaitez-vous continuer ?"}
                onContinue={this.props.onContinue} onExit={this.props.onExit}  >
              </AskContinue>
            </div>} </>}


      </>
    )
  }
}


const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps, { fetchQuestion, fetchQuestionScores, changeCurrentQuestion, nextSelectedFromBodyQuestions, askContinueScreen, updateScore })(OverviewNode)

import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import { askContinueScreen, changeCurrentQuestion, changePage, fetchQuestion, nextOtherQuestionsSection, updateScore } from '../actions';
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
        const { currentQuestion } = this.props
        this.props.fetchQuestion(currentQuestion)
    }
    onContinue = () => {
        if (this.props.otherSectionQuestionToUse.length > 0) {
            this.props.changePage(this.props.otherSectionQuestionToUse[0].page)
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
                this.setState({ nextSection: true }, () => {
                    setTimeout(() => {
                        this.props.askContinueScreen()
                    }, 2000);
                })
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
        console.log(action.values);

        if (action.values.length > 0) {
            let actionValues = action.values.map(el => {
                return { id: el.score.id, value: el.value, name: el.score.name }
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
            this.props.nextOtherQuestionsSection();
        }
    }
    render() {
        const { t, isLoading, item, page } = this.props
        console.log(page);

        return (
            <>
                {!this.state.nextSection ? (
                    <Row className="justify-content-center">
                        <Col lg="12">
                            {this.props.otherSectionQuestionToUse.length > 0 && <QuestionHead title={`Des questions à propos  ${this.props.otherSectionQuestionToUse[0].value} `} pageTitle={false} />}
                            <QuestionDisplay
                                item={item}
                                onSelectChoice={this.onSelectChoice}
                                isLoading={isLoading}
                            />
                        </Col>
                    </Row>
                ) : <div>
                        <AskContinue title={`Vous avez déjà répondu à des questions ${this.state.titleAsk}, souhaitez-vous continuer ?`}
                            onContinue={this.onContinue} onExit={this.props.onExit}  >
                        </AskContinue>
                    </div>}
            </>
        )
    }
}
const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { fetchQuestion, changeCurrentQuestion, nextOtherQuestionsSection, askContinueScreen, updateScore, changePage })(withTranslation()(FourthPage))
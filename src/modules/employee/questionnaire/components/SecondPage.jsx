import React from 'react';
//import { Link } from 'react-router-dom'
// reactstrap components
import { connect } from "react-redux";
import { Badge, Button, Col, Row } from 'reactstrap';
import { changeCurrentQuestion, selectDiselectPartBody } from '../actions';
import { HUMAN_BODY, statcTreeNode } from '../constants';
import HumanBodyBackSide from './HumanBodyBackSide';
import HumanBodyFrontSide from './HumanBodyFrontSide';
class FirstQuestion extends React.Component {
  submitSelectedArea = () => {
    let currenQuestion = statcTreeNode[this.props.selectedPartBodyID[0]];
    this.props.changeCurrentQuestion(currenQuestion)

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentQuestion !== this.props.currentQuestion) {
      this.props.onContinue()

    }
  }
  render() {
    const { t, onContinue, onExit } = this.props
    return (
      <>
        <div>
          <h1 className="h2"> {'Sélectionnez votre points douloureux'}</h1>
          {this.props.selectedPartBody.length > 0 ? (<div style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 10
          }}>
            <span style={{
              marginBottom: 5
            }}>{this.props.selectedPartBody.length === 1 ? "Votre point douleureux: " : "Vos points douleureux: "}</span>
            {this.props.selectedPartBodyID.map((el, index) => {
              const boyAreaObject = HUMAN_BODY[el]
              return (
                <Badge key={index} color={index === 0 ? "danger" : "warning"} style={{
                  marginLeft: 5,
                  marginBottom: 5
                }}> {boyAreaObject.value} <span style={{
                  marginLeft: 5,
                  cursor: "pointer"
                }}> <i className="fa fa-times" onClick={() => this.props.selectDiselectPartBody(boyAreaObject)}></i>  </span> </Badge>
              )
            })}
          </div>) : <span>{" Aucun point sélectionné pour le moment "}</span>}


          <Row>
            <Col lg="6">
              <HumanBodyFrontSide />
            </Col>
            <Col lg="6">
              <HumanBodyBackSide />
            </Col>
          </Row>

          <div className="pb-5" />
          <h1 className="h4 pb-2"> {'Voulez-vous continuer ?'} </h1>
          <Button onClick={this.submitSelectedArea} disabled={this.props.selectedPartBody.length === 0}>{'Oui'}</Button>
          <Button onClick={onExit}>{'Non'}</Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { selectDiselectPartBody, changeCurrentQuestion })(FirstQuestion)

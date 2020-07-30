import React from 'react';
//import { Link } from 'react-router-dom'
// reactstrap components
import { connect } from "react-redux";
import { Badge, Button, Col, Row } from 'reactstrap';
import { selectDiselectPartBody } from '../actions';
import HumanBodyBackSide from './HumanBodyBackSide';
import HumanBodyFrontSide from './HumanBodyFrontSide';
class FirstQuestion extends React.Component {

  render() {
    const { t, onContinue, onExit } = this.props
    return (
      <>
        <div>
          <h1 className="h2"> {'Select Your Pain Spot'}</h1>
          {this.props.selectedPartBody.length > 0 ? (<div style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 10
          }}>
            <span style={{
              marginBottom: 5
            }}>{" Your painful spot: "}</span>
            {this.props.selectedPartBody.map((el, index) => {
              return (
                <Badge color={index === 0 ? "danger" : "warning"} style={{
                  marginLeft: 5,
                  marginBottom: 5
                }}> {el} <span style={{
                  marginLeft: 5,
                  cursor: "pointer"
                }}> <i className="fa fa-times" onClick={() => this.props.selectDiselectPartBody(el)}></i>  </span> </Badge>
              )
            })}
          </div>) : <span>{" No spot selected yet "}</span>}


          <Row>
            <Col lg="6">
              <HumanBodyFrontSide />
            </Col>
            <Col lg="6">
              <HumanBodyBackSide />
            </Col>
          </Row>

          <div className="pb-5" />
          <h1 className="h4 pb-2"> {'Do You Want To Continue ?'} </h1>
          <Button onClick={onContinue} disabled={this.props.selectedPartBody.length === 0}>{'Yes'}</Button>
          <Button onClick={onExit}>{'No'}</Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { selectDiselectPartBody })(FirstQuestion)

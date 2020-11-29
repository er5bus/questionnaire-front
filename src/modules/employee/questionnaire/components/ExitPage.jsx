import React from 'react';
//import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import styled from 'styled-components';
import thanksImg from './../../../../assets/img/deal.svg';


const Container = styled.div`
display: flex;
justify-content: center;
font-size : 20px;
font-weight: bold;
color:#17a2b8;
font-family: Montserrat;
padding: 20px 0
`

const ExitQuestions = ({ tasksEnded }) => {

  return (
    <>
      <div className=" d-flex flex-column align-items-center justify-content-center login-title">
        <img width="200" src={thanksImg} alt="..." />
      </div>
    </>
  )
}

const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, {})(ExitQuestions)

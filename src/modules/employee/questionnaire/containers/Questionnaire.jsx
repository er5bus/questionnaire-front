import React, { useCallback, useEffect, useRef, useState } from 'react';
//import { Redirect, Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// reactstrap components
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Loader from '../../../../components/Loader';
import FourthPage from '../components/FourthPage';
import NutritionalPage from '../components/NutritionalPage';
import ScoresInterpratation from '../components/ScoresInterpratation';
import Transitionpages from '../components/TransitionPages';
import { otherQuestionsTreeNode } from '../constants';
import { changeCurrentQuestion, changePage, changePageAfterSelection, exitPage, fillScoresTable, fillSelectedDeselectedNutriScores, getUserHistory, nextOtherQuestionsSection, nextPage, prevPage, saveUserState, selectDiselectPartBody, tasksEnded, updateotherSectionQuestionToUse } from './../actions';
import ExitPage from './../components/ExitPage';
//import employeeRoutes from './../../../../routes/employee'
import FirstPage from './../components/FirstPage';
import SecondPage from './../components/SecondPage';
import ThirdPage from './../components/ThirdPage';

const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state);
      resolverRef.current = null;
    }
  }, [resolverRef.current, state]);

  const handleSetState = useCallback((stateAction) => {
    setState(stateAction);
    return new Promise(resolve => {
      resolverRef.current = resolve;
    });
  }, [setState])

  return [state, handleSetState];
};
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Questionnaire = (props) => {
  const { t, questionnaire /*, error, item, isLoading*/ } = props
  const { page, exit, isLoadingUserState } = props.questionnaire
  const prevUserState = usePrevious(questionnaire)
  const prevPage = usePrevious(page)
  const [titlePage, setTitlePage] = useState("")
  const [firstLoad, setFirstLoad] = useState(true)
  const [showWhitePage, setShowWhitePage] = useState(false)
  const [fade, setFade] = useState(false)
  const [continueSecond, setContinueSecond] = useState(true)
  // PAgeHandle
  useEffect(() => {
    if (prevPage && prevPage !== page) {
      if (firstLoad) {
        if ((page === 6 || page === 4 || page === 5) && questionnaire.otherSectionQuestionToUse.length === 0) {
          props.updateotherSectionQuestionToUse(page)
        }
        setFirstLoad(false)
      }

    }

    if (page && continueSecond || page !== 2) {
      setShowWhitePage(true);
      setFade(false)
      setTitlePage(titleWhitePage(page))
      setTimeout(() => {
        setFade(true)
      }, 1000);
      setTimeout(() => {
        setShowWhitePage(false)
      }, 2500);

    }
  }, [page])


  // state handel
  useEffect(() => {
    if (prevUserState && prevUserState !== questionnaire && Object.values(questionnaire).length !== 0) {
      props.saveUserState(questionnaire)
    }
  }
    , [questionnaire])
  //first Load ........................
  useEffect(() => {
    //props.saveUserState({})
    props.getUserHistory()

  }, [])
  //..............................
  const onSubmit = (values) => {
    props.create(values)
  }

  const onNext = () => {
    setContinueSecond(false)
    props.nextPage()
  }

  const onPrev = () => {
    props.prevPage()
  }
  const onContinueFirstPage = () => {
    setContinueSecond(false)
    props.nextOtherQuestionsSection();
    onNext()
  }
  const changePage = () => {
    props.changeCurrentQuestion(otherQuestionsTreeNode["ERGONOMIE"])
    props.changePageAfterSelection()
  }
  const onExit = () => {
    props.exitPage()
  }
  const titleWhitePage = (page) => {
    switch (page) {
      case 3:
      case 1:
      case 2:
        return "Questionnaire santé"
      case 4:
        return 'Questionnaire ergonomie '
      case 5:
        return "Questionnaire  psycho-social"
      case 6:
        return 'Questionnaire activité Physique '
      case 7:
        return 'Questionnaire nutritionnel'
      case 8:
        return 'Résultat et scores'
      default:
        break;
    }
  }
  return (
    <>

      <Container className="mt--4" >
        <Row className="justify-content-center">
          <Col lg="12" md="12">
            <Card className={`shadow card-shadow-style ${page === 2 && "second-page-style"} ${page === 7 && "seven-page-style"}`} >
              {
                isLoadingUserState ? <Loader /> :
                  <CardBody className="px-lg-5 py-lg-5">
                    {showWhitePage ?
                      <div className={`d-flex justify-content-center align-items-center ${fade ? "fade-out" : "fade-in"}  `} style={{
                        height: 240
                      }}>
                        <Transitionpages title={titlePage} page={page} exit={exit} />
                      </div>
                      :
                      <>
                        {page === 1 && <FirstPage onExit={changePage} onContinue={onNext} />}
                        {page === 2 && <SecondPage onExit={changePage} onContinue={onContinueFirstPage} />}
                        {page === 3 && <ThirdPage onExit={onExit} onContinue={onNext} />}
                        {(page === 4 || page === 5 || page === 6) && <FourthPage onExit={onExit} onContinue={onNext} />}
                        {page === 7 && <NutritionalPage />}
                        {page === 8 && <ScoresInterpratation />}
                        {exit && <ExitPage />}
                      </>
                    }

                  </CardBody>
              }

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
//}


const mapStateToProps = state => {
  const { questionnaire } = state
  return { questionnaire: questionnaire }
}

export default connect(mapStateToProps, { nextPage, prevPage, exitPage, changePageAfterSelection, changePage, fillSelectedDeselectedNutriScores, nextOtherQuestionsSection, changeCurrentQuestion, tasksEnded, selectDiselectPartBody, fillScoresTable, saveUserState, getUserHistory, updateotherSectionQuestionToUse })(withTranslation()(Questionnaire))

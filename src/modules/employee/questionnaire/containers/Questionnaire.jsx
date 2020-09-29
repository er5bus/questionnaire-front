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
import { changeCurrentQuestion, changePage, exitPage, fillScoresTable, fillSelectedDeselectedNutriScores, getUserHistory, nextOtherQuestionsSection, nextPage, prevPage, saveUserState, selectDiselectPartBody, tasksEnded, updateotherSectionQuestionToUse } from './../actions';
import ExitPage from './../components/ExitPage';
//import employeeRoutes from './../../../../routes/employee'
import FirstPage from './../components/FirstPage';
import SecondPage from './../components/SecondPage';
import ThirdPage from './../components/ThirdPage';
// class Questionnaire extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       titlePage: "",
//       showWhitePage: false,
//       fade: false
//     }
//   }
//   componentDidMount() {
//     //props.getUserHistory()

//     let taskEnd = localStorage.getItem("taskEnd");
//     if (taskEnd) {
//       this.props.tasksEnded()
//       this.props.exitPage()
//       return
//     }
//     let CurrentPage = 1;
//     if (localStorage.getItem("CurrentPage") !== null) {
//       CurrentPage = Number(localStorage.getItem("CurrentPage"));
//       if (CurrentPage === 2) {
//         if (localStorage.getItem("selectedBodyArea")) {
//           this.props.selectDiselectPartBody(JSON.parse(localStorage.getItem("selectedBodyArea")))
//         }
//         this.props.changePage(CurrentPage)
//         return
//       }
//       if (CurrentPage >= 3 && CurrentPage < 7) {
//         if (localStorage.getItem('ScoresArray')) {
//           this.props.fillScoresTable(JSON.parse(localStorage.getItem('ScoresArray')))
//         }
//         if (CurrentPage === 3) {
//           this.props.nextOtherQuestionsSection()
//           this.props.selectDiselectPartBody(JSON.parse(localStorage.getItem("selectedBodyArea")))
//           this.props.changeCurrentQuestion(JSON.parse(localStorage.getItem('CurrentQuestion')))
//           this.props.changePage(CurrentPage)
//           return
//         }
//         if (CurrentPage === 6) {
//           this.props.nextOtherQuestionsSection()
//         }
//         if (CurrentPage === 5) {
//           this.props.nextOtherQuestionsSection()
//           this.props.nextOtherQuestionsSection()
//         }
//         this.props.changeCurrentQuestion(JSON.parse(localStorage.getItem('CurrentQuestion')))
//         this.props.changePage(CurrentPage)
//       } else if (CurrentPage === 7) {

//         let lastSelectedScore = localStorage.getItem("SelctedNutriScore");
//         let lastDeslectedScore = localStorage.getItem("DeSelctedNutriScore");
//         if (lastSelectedScore && lastDeslectedScore) {
//           this.props.fillSelectedDeselectedNutriScores({
//             lastSelectedScore: Number(lastSelectedScore),
//             lastDeselectedScore: Number(lastDeslectedScore)
//           })
//         }
//         this.props.changePage(CurrentPage)
//       } else if (CurrentPage === 8) {
//         this.props.changePage(CurrentPage)
//       }

//     }



//     // this.props.changeCurrentQuestion(JSON.parse(localStorage.getItem('CurrentQuestion')))
//     // this.props.changePage(CurrentPage)

//   }

//   onSubmit = (values) => {
//     //this.props.create(values)
//   }

//   onNext = () => {
//     this.props.nextPage()
//   }

//   onPrev = () => {
//     this.props.prevPage()
//   }
//   onContinueFirstPage = () => {

//     this.props.nextOtherQuestionsSection();
//     this.onNext()
//   }
//   changePage = () => {
//     this.props.changeCurrentQuestion(otherQuestionsTreeNode["ERGONOMIE"])
//     this.props.changePage(4)
//   }
//   onExit = () => {
//     this.props.exitPage()
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.page !== this.props.page && nextProps.page > 2) {
//       this.setState({ showWhitePage: true, fade: false })
//       this.setState({ titlePage: this.titleWhitePage(nextProps.page) })
//       setTimeout(() => {
//         this.setState({ fade: true })
//       }, 1000);
//       setTimeout(() => {
//         this.setState({ showWhitePage: false })
//       }, 2500);
//     }

//   }
//   titleWhitePage = (page) => {

//     switch (page) {
//       case 3:
//         return "Questionnaire Santé"
//       case 4:
//         return 'Questionnaire Ergonomie '
//       case 5:
//         return "Questionnaire Psychologie"
//       case 6:
//         return 'Questionnaire Activité Physique '
//       case 7:
//         return 'Questionnaire Nutritionnelle'
//       case 8:
//         return 'Résultat et Scores'
//       default:
//         break;
//     }
//   }
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
    // fetch('https://predicta.fulltech.io/api/login_check', {
    //   method: "post",
    //   headers: {
    //     'Accept': 'application/json',
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password: "&20HelloPredict20!",
    //     username: "admin@predict-a.com",
    //     _remember_me: ""
    //   }),
    // }).then(resp => {
    //   return resp.json()

    // }).then(response => {


    // })
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
    props.changePage(4)
  }
  const onExit = () => {
    props.exitPage()
  }
  const titleWhitePage = (page) => {
    switch (page) {
      case 3:
      case 1:
      case 2:
        return "Questionnaire Santé"
      case 4:
        return 'Questionnaire Ergonomie '
      case 5:
        return "Questionnaire  Psycho-social"
      case 6:
        return 'Questionnaire Activité Physique '
      case 7:
        return 'Questionnaire nutritionnel'
      case 8:
        return 'Résultat et Scores'
      default:
        break;
    }
  }
  return (
    <>

      <Container className="mt--4" >
        <Row className="justify-content-center">
          <Col lg="12" md="12">
            <Card className="shadow card-shadow-style" style={{
              marginTop: page === 2 ? -50 : 0,
              minHeight: 300,
              maxHeight: page === 2 ? 550 : "auto"
            }}>
              {
                isLoadingUserState ? <Loader /> :
                  <CardBody className="px-lg-5 py-lg-5">
                    {showWhitePage ?
                      <div className={`d-flex justify-content-center align-items-center ${fade ? "fade-out" : "fade-in"}  `} style={{
                        height: 240
                      }}>
                        <Transitionpages title={titlePage} page={page} />
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

export default connect(mapStateToProps, { nextPage, prevPage, exitPage, changePage, fillSelectedDeselectedNutriScores, nextOtherQuestionsSection, changeCurrentQuestion, tasksEnded, selectDiselectPartBody, fillScoresTable, saveUserState, getUserHistory, updateotherSectionQuestionToUse })(withTranslation()(Questionnaire))

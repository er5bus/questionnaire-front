import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Button, Row, Table } from 'reactstrap';
import styled from 'styled-components';
import { exitPage, tasksEnded } from '../actions';

const TableTitle = styled.div`
display : flex;
justify-content : center;
align-items: center;
font-size: 1.8rem;
font-family: Montserrat;
color:#18223D;
margin: 20px 0
`
const TitleCatgorie = styled.div`
display : flex;
font-size: 1.1rem;
font-family: Montserrat;
color: #0A48B3;
margin: 40px 0px 10px `

const scoreTable = [
    {
        name: "Kinésithérapie",
        descriptions: "Besoin interventionnel d'un kinésithérapeute",
        id: "Kinésithérapie"
    },
    {
        name: "Ergonomie",
        descriptions: "Besoin interventionnel d'un ergonome",
        id: "Ergonomie"
    },
    {
        name: "Médecine",
        descriptions: "Besoin interventionnel d'un médecin",
        id: "Médecine"
    },
    {
        name: "Psychologie",
        descriptions: "Besoin interventionnel d'un psychologue",
        id: "Psychologie"
    },
    {
        name: "Coach",
        descriptions: "Besoin interventionnel en coaching",
        id: "Coach"
    },
    {
        name: "Ostéopathie",
        descriptions: "Besoin interventionnel en ostéopathie",
        id: "Ostéopathie"
    },
    {
        name: "Arrêt de travail",
        descriptions: "Risque d'arrêt de travail",
        id: "AT"
    },
]
const ScoresInterpratation = ({ scores, selectedScoreNut, deselectedScoreNut, exitPage, tasksEnded, selectedPartBody, healthAnsweredQuestion, ergonomicsAnsweredQuestion, psychologiqueAnsweredQuestion, coachingAnsweredQuestion }) => {
        
    const [scoresArray, setScoresArray] = useState([]);
    const calculateScore = (type, scores) => {
        let finalScore = 0;
        let filtredTable = scores.filter(el => el.name === type)
        if (filtredTable.length === 0) {
            return finalScore
        }
        filtredTable.forEach(element => {
            finalScore = finalScore + element.value
        });
        return finalScore
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

    }, []);
    const { t } = useTranslation()

    return (
        <>

            <TableTitle>
                {selectedPartBody.length > 0 &&
                    <span> {t(`Votre point douloureux selectionné est ${selectedPartBody[0]}`)} </span>
                }
            </TableTitle>
            {healthAnsweredQuestion.length > 0 &&
                <>
                    <TitleCatgorie>
                        Réponses de questionnaire santé
                </TitleCatgorie>
                    <Table responsive={true} hover bordered >
                        <thead>
                            <tr>
                                <th>  {t("Question")}  </th>
                                <th> {t("Réponse")}  </th>
                                <th>  {t("Score de la question")} </th>
                            </tr>
                        </thead>
                        <tbody>
                            {healthAnsweredQuestion.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.name}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            }
            {ergonomicsAnsweredQuestion.length > 0 &&
                <>
                    <TitleCatgorie>
                        Réponses de questionnaire ergonomie
                </TitleCatgorie>
                    <Table responsive={true} hover bordered >
                        <thead>
                            <tr>
                                <th>  {t("Question")}  </th>
                                <th> {t("Réponse")}  </th>
                                <th>  {t("Score de la question")} </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ergonomicsAnsweredQuestion.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.name}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            }
            {coachingAnsweredQuestion.length > 0 &&
                <>
                    <TitleCatgorie>
                        Réponses de questionnaire activité physique
                </TitleCatgorie>
                    <Table responsive={true} hover bordered >
                        <thead>
                            <tr>
                                <th>  {t("Question")}  </th>
                                <th> {t("Réponse")}  </th>
                                <th>  {t("Score de la question")} </th>
                            </tr>
                        </thead>
                        <tbody>
                            {coachingAnsweredQuestion.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.name}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            }
            {psychologiqueAnsweredQuestion.length > 0 &&
                <>
                    <TitleCatgorie>
                        Réponse de questionnaire Psychologie
                </TitleCatgorie>
                    <Table responsive={true} hover bordered >
                        <thead>
                            <tr>
                                <th>  {t("Question")}  </th>
                                <th> {t("Réponse")}  </th>
                                <th>  {t("Score de la question")} </th>
                            </tr>
                        </thead>
                        <tbody>
                            {psychologiqueAnsweredQuestion.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.name}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            }
            <TableTitle>
                {t('Table des scores par categorie')}
            </TableTitle>
            <Table responsive={true} hover >
                <thead>
                    <tr>
                        <th>  {t("Nom du score")}  </th>
                        <th> {t("Description du score")}  </th>
                        <th>  {t("Valeur")} </th>
                    </tr>
                </thead>
                <tbody>
                    {scoreTable.map(el => (
                        <tr key={el.name}>
                            <th scope="row"> {t(`${el.name}`)}  </th>
                            <td> {t(`${el.descriptions}`)}  </td>
                            <td> {scores.length !== 0 ? calculateScore(el.id, scores) : calculateScore(el.id, scoresArray)} </td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row"> {t("Aliments sélectionnés")}  </th>
                        <td> {t("Valeure ajoutée des aliments sélectionnés")}  </td>
                        <td> {selectedScoreNut} </td>
                    </tr>
                    <tr>
                        <th scope="row"> {t("Aliments non sélectionnés")}  </th>
                        <td> {t("Valeure non ajoutée des aliments non sélectionnés")}  </td>
                        <td> {deselectedScoreNut} </td>
                    </tr>
                </tbody>

            </Table>
            <Row className="justify-content-end pt-5">

                <Button className="nutri-button"
                    style={{
                        background: "#062484",
                        borderColor: " #062484"
                    }}
                    onClick={() => {
                        tasksEnded()
                        exitPage()
                    }}
                > {t("Terminer")} </Button>

            </Row>
        </>
    )
}


const mapStateToProps = state => state.questionnaire
export default connect(mapStateToProps, { exitPage, tasksEnded })(ScoresInterpratation)
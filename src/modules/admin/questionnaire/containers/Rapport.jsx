import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Button, Row, Table } from 'reactstrap';
import styled from 'styled-components';
import {   getScoresUser  } from '../actions';
import Loader from '../../../../components/Loader';
const TableTitle = styled.div`
display : flex;
justify-content : center;
align-items: center;
font-size: 1.8rem;
font-family: Montserrat;
color:#18223D;
margin: 20px 0
`;
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
        id: "Kinésithérapie",
        idForSend: "PHYSIOTHERAPY"
    },
    {
        name: "Ergonomie",
        descriptions: "Besoin interventionnel d'un ergonome",
        id: "Ergonomie",
        idForSend: "ERGONOMICS"
    },
    {
        name: "Médecine",
        descriptions: "Besoin interventionnel d'un médecin",
        id: "Médecine",
        idForSend: "MEDICINE"
    },
    {
        name: "Psychologie",
        descriptions: "Besoin interventionnel d'un psychologue",
        id: "Psychologie",
        idForSend: "PSYCHOLOGY"
    },
    {
        name: "Coach",
        descriptions: "Besoin interventionnel en coaching",
        id: "Coach",
        idForSend: "COACH"
    },
    {
        name: "Ostéopathie",
        descriptions: "Besoin interventionnel en ostéopathie",
        id: "Ostéopathie",
        idForSend: "OSTEOPATHY"
    },
    {
        name: "Arrêt de travail",
        descriptions: "Risque d'arrêt de travail",
        id: "AT",
        idForSend: "STOPP_WORKING"
    },
]
const Rapport = (props    ) => {
  
   
    const [isLoading, setisLoading] = useState(true)
  
    useEffect(() => {
           props.getScoresUser({userId : props.match.params.param})
         //  sethealthAnsweredQuestion = props.rapport.items
         setisLoading(false)
         
        
    }, [ ])
 
       
        console.log("props",props )
 

    const calculateScore = (type, scores ) => {
       
      
        let finalScore = 0;
        let filtredTable = scores.filter(el => el.category === type)
        console.log("filtredTable",filtredTable)
        
        if (filtredTable.length === 0) {
            return finalScore
        }
        filtredTable.forEach(element => {
            finalScore = finalScore + element.score
        });
        return finalScore
    }
     
    
    
    

    const { t } = useTranslation()
    const    scores    =  props.rapport
    return (

        <>
        {console.log("scores",scores)}
            { isLoading && scores ? <Loader /> :  
               <TableTitle>
                 
                     
                    <span> {t(`Votre point douloureux selectionné est `)} </span>
                 
            </TableTitle> }
            { scores &&   
           scores[1].questions.length > 0 &&
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
                            {scores[1].questions.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.answer}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </> 
                }  
           {scores &&   scores[1].questions.length > 0 &&
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
                            {scores[1].questions.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.answer}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            
                            }
            {scores &&   scores[1].questions.length > 0 &&
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
                            {scores[1].questions.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.answer}`)}  </td>
                                    <td> {el.score} </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </>
            }
            {scores &&   scores[1].questions.length > 0 &&
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
                            {scores[1].questions.map(el => (
                                <tr key={el.id}>
                                    <th scope="row"> {t(`${el.question}`)}  </th>
                                    <td> {t(`${el.answer}`)}  </td>
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
                {scores && scoreTable.map(el => (
                        <tr key={el.name}>
                            <th scope="row"> {t(`${el.name}`)}  </th>
                            <td> {t(`${el.descriptions}`)}  </td>
                              <td> {calculateScore(el.idForSend, scores)} </td>   
                        </tr>
                    ))}
                    {/* <tr>
                        <th scope="row"> {t("Aliments sélectionnés")}  </th>
                        <td> {t("Valeure ajoutée des aliments sélectionnés")}  </td>
                          <td> {selectedScoreNut} </td>  
                    </tr>
                    <tr>
                        <th scope="row"> {t("Aliments non sélectionnés")}  </th>
                        <td> {t("Valeure non ajoutée des aliments non sélectionnés")}  </td>
                        <td> {deselectedScoreNut} </td>  
                    </tr> */}
                </tbody>

            </Table>
              
        </>
    )
}

const mapStateToProps = state => {
    
    const { rapport } = state.employeeRapport
    return { rapport: rapport }
  }
 
export default connect(mapStateToProps, {  getScoresUser    })(Rapport)
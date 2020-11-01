import React , { useEffect, useState }  from 'react'

 
import {Card,  CardTitle, Col, Row , Progress}  from 'reactstrap';
import { CircularProgressbar,  buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
 

const Stats = ({ needForInterventions, breakdownOfFailures }) => {
    const [checked, setChecked] = useState(false)
 
 
    const handleChange =()  => {
        setChecked(!checked)
       
    } 
    
    let Interventions = needForInterventions.KPIS.sort(function (a, b) {
        return a.category_score - b.category_score;
      })
  console.log("breakdownOfFailures", breakdownOfFailures)
  console.log("Interventions", Interventions )
  return (
    <Row>

<Col lg="6">
              <Card body>
                <CardTitle>Etat de forme par secteur</CardTitle>
                <div className="pt-4">
                  <Row>
                    <Col lg="4">
                      TMS
                    </Col>
                    <Col lg="8">
                      <Progress style={{background:" linear-gradient(90deg, #2A52BC -0.03%, #062484 100.01%)"}} value={breakdownOfFailures.TMS.slice(0, -1) } />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      RPS
                    </Col>
                    <Col lg="8">
                      <Progress style={{background:" linear-gradient(270deg, #926D3F -20.99%, #D08528 100.07%)"}} value={breakdownOfFailures.RPS.slice(0, -1) }  />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Ergonomie
                    </Col>
                    <Col lg="8">
                      <Progress style={{background:"  linear-gradient(270deg, #D3545D -8.35%, #EB404C 100.04%)"}}  value={breakdownOfFailures.ergonomics.slice(0, -1) }  />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Nutrition
                    </Col>
                    <Col lg="8">
                      <Progress  style={{background:" linear-gradient(90deg, #DD3E21 -0.05%, #BF4F3B 111.13%)"}} value={breakdownOfFailures.nutrition.slice(0, -1) }  />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Activités physiques
                    </Col>
                    <Col lg="8">
                      <Progress  style={{background:"linear-gradient(90deg, #AABCC9 1.95%, #89ABC5 105.31%)"}}  value={breakdownOfFailures.physicalActivity.slice(0, -1)} />
                    </Col> 
                  </Row>
                </div>
              </Card>
            </Col>
            <Col lg="3">
              <Card body>
                <CardTitle>% de questionnaires complétés</CardTitle>
                <CircularProgressbar
        value={10}
        text={`10%`}
        styles={buildStyles({
          textColor: "#2dce89",
          pathColor: "#2dce89",
          trailColor: "#0A48B3"
        })}
      />
              </Card>
            </Col>
            <Col lg="3">
              <Card body>
             
      
                 <CardTitle>  <input 
          type="checkbox" 
          checked={ checked } 
           onChange={ handleChange}
            style={{marginRight : "5px", backgroundColor:"red"}}/>Besoins interventionnels</CardTitle>  
                <div className="text-center" style={{color: 'white',background:"linear-gradient(180deg, #FF8B5B 0%, #FF736B 45.83%, #EC5E68 100%)",borderRadius: "37px"}}>
                    {Interventions.map((item , key) =>
     <p key={item.category} style={{ textTransform: 'lowercase'}}> {item.category} :  {item.category_score} </p>
)}
                 
                  {!checked? null : <p>GPT : {needForInterventions.GPT}</p>}  
                </div>
              </Card>
            </Col>
    </Row>
  )
}


export default Stats

import React , { useEffect, useState, useRef }  from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import useResize from './../../../../hooks/useResize'
import {Card,  CardTitle, Col, Row, CardHeader, CardBody , Progress}  from 'reactstrap';
import { CircularProgressbar,  buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const LABES = {
  /*STOPP_WORKING : "Arrête de travailler",
  MEDICINE : "Médecine",*/
  PHYSIOTHERAPY : "Kinésithérapie",
  ERGONOMICS : "Ergonomie",
  OSTEOPATHY : "Ostéopathie",
  COACH : "Coach sportive",
  PSYCHOLOGY: "Psychologie"
}

const Stats = ({ needForInterventions, breakdownOfFailures }) => {
  const [checked, setChecked] = useState(false)


  const handleChange =()  => {
    setChecked(!checked)

  }

  let Interventions = needForInterventions.kpis.sort(function (a, b) {
    return b.category_score - a.category_score;
  })

  const breakdownOfFailuresRef = useRef()
  const { width: breakdownOfFailuresWidth } = useResize(breakdownOfFailuresRef)


  return (
    <Row>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle className="mb-0">Etat de forme par secteur</CardTitle>
          </CardHeader>
          <CardBody>
            <div ref={breakdownOfFailuresRef} className="pt-4">
              <BarChart
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                width={breakdownOfFailuresWidth}
                height={250} 
                data={[
                  { name: "TMS ", points:[0, breakdownOfFailures.TMS], fill: "#062484"   ,radius:30 },
                  { name: "RPS ", points: [0, breakdownOfFailures.RPS], fill: "#D08528"   , radius:30  },
                  { name: "Ergonomie ", points: [0, breakdownOfFailures.ergonomics], fill: "#EB404C"   , radius:30  },
                  { name: "Nutrition ", points: [0, breakdownOfFailures.nutrition], fill: "#BF4F3B"   , radius:30  },
                  { name: "Activités physiques ", points: [0, breakdownOfFailures.physicalActivity], fill: "#89ABC5"   , radius:30  },
                ]}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]}/>
                <YAxis dataKey="name" type="category"/>
                <Bar dataKey="points" fill="#0A48B3" />
              </BarChart>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>
          <CardTitle>% de questionnaires complétés</CardTitle>
          <div style={{ height: 300 }}>
            <CircularProgressbar
              value={ needForInterventions.questionCompleted }
              text={ `${needForInterventions.questionCompleted.toFixed(2)}%` }
              styles={buildStyles({
                textColor: "rgb(24,34,61,1)",
                pathColor: "rgb(152,172,189,1)",
                trailColor: "rgb(24,34,61,1)"
              })}
            />
          </div>
        </Card>
      </Col>
      <Col lg="3">
        <Card body>


         <CardTitle> {/*   <input
            type="checkbox"
            checked={ checked }
            onChange={ handleChange}
            style={{marginRight : "5px", backgroundColor:"red"}}/> */}Besoins interventionnels</CardTitle>
          <div className="text-center pt-4 pb-3" style={{color: 'white',background:"linear-gradient(180deg, #FF8B5B 0%, #FF736B 45.83%, #EC5E68 100%)",borderRadius: "37px"}}>
            {Interventions.slice(0, 3).sort((a, b) => a.category_score > b.category_score).map((item , key) =>
             LABES[item.category] && <p key={item.category} style={{ textTransform: 'capitalize', fontWeight: 'bold'}}> {LABES[item.category]} :  {item.category_score} </p>
            )}

            {!checked? null : <p style={{ textTransform: 'capitalize', fontWeight: 'bold'}}>Gestes et postures : {needForInterventions.gpt}</p>}
          </div>
        </Card>
      </Col>
    </Row>
  )
}


export default Stats

import React, {useRef} from 'react'

import CustomizedAxisTick from './../../../../components/CustomizedAxisTick'
import useResize from './../../../../hooks/useResize'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from 'reactstrap';

const LABES = {
  abdominalPains: "Douleurs abdominales ",
  back: "Dos ",
  headache: "Maux de téte",
  lowerBodyLimbs: "Membres inférieurs ",
  upperBodyLimbs: "Membres supérieurs ",
}


const Stats = ({ needForInterventions, detailsOfTrouble }) => {

  const detailsOfTroubleRef = useRef()
  const needForInterventionsRef = useRef()

  const { width: detailsOfTroubleWidth } = useResize(detailsOfTroubleRef)
  const { width: needForInterventionsWidth } = useResize(needForInterventionsRef)

  return (
    <Row>
 
  
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle className="mb-0">Détail des troubles</CardTitle>
          </CardHeader>
          <CardBody>
     
            <div ref={detailsOfTroubleRef} className="pt-4">
                  {console.log(detailsOfTrouble)} 
              <BarChart
               
                width={detailsOfTroubleWidth}
                height={300}
                margin={{ top: 30, right: 30, left: 50, bottom: 5 }}
                data= { [
                  { name: "Douleurs abdominales", points:[0, detailsOfTrouble.abdominalPains ] , fill: "#062484"   ,radius:30 },
                  { name: "Dos", points:[0, detailsOfTrouble.back ] , fill: "#D08528"   , radius:30  },
                  { name: "Maux de téte", points:[0, detailsOfTrouble.headache ] , fill: "#EB404C"   , radius:30  },
                  { name: "Membres inférieurs", points:[0, detailsOfTrouble.lowerBodyLimbs ] , fill: "#BF4F3B"   , radius:30  },
                  { name: "Membres supèrieurs", points:[0, detailsOfTrouble.upperBodyLimbs ] , fill: "#89ABC5"   , radius:30  }
                ] }

                 // data={ Object.keys(detailsOfTrouble).map(key => ({ name: LABES[key], points: [0, detailsOfTrouble[key]] , radius:30 }))}
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
     
      { Object.keys(needForInterventions).map(key => (
        <Col lg="6">
          <Card>
            <CardHeader>
              <CardTitle className="mb-0">Niveau d'intervention ({ LABES[key] })</CardTitle>
            </CardHeader>
            <CardBody>
              <div ref={needForInterventionsRef}>
                <BarChart
                  width={needForInterventionsWidth}
                  margin={{ top: 5, right: 3, left: 5, bottom: 50 }}
                  height={300}
                  width={200}
                  data={ [
                    { name: "Préventif", value: needForInterventions[key].preventive, fill: "#062484"   ,radius:30 },
                    { name: "Modéré", value: needForInterventions[key].moderate, fill: "#D08528"   , radius:30  },
                    { name: "Important", value: needForInterventions[key].important, fill: "#EB404C"   , radius:30  },
                    { name: "Urgent", value: needForInterventions[key].urgent, fill: "#BF4F3B"   , radius:30 }                  ] }
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={<CustomizedAxisTick />}  />
                  <YAxis  />
                  <Tooltip />
                  <Bar dataKey="value" label="Le valeur: " fill="#0A48B3" background={{ fill: '#eee' }} />
                </BarChart>
              </div>
            </CardBody>
          </Card>
        </Col>

      )) }
    </Row>
  )
}


export default Stats

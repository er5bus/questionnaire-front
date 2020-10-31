import React, {useRef} from 'react'

import CustomizedAxisTick from './../../../../components/CustomizedAxisTick'
import useResize from './../../../../hooks/useResize'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from 'reactstrap';


const Stats = ({ needForInterventions, detailsOfTrouble }) => {

  const detailsOfTroubleRef = useRef()
  const needForInterventionsRef = useRef()

  const { width: detailsOfTroubleWidth } = useResize(detailsOfTroubleRef)
  const { width: needForInterventionsWidth } = useResize(needForInterventionsRef)

  console.log(detailsOfTroubleWidth, detailsOfTrouble.stress)
  return (
    <Row>

      <Col lg="6">
        <Card body>
          <CardTitle>Détails de troubles</CardTitle>
          <div ref={detailsOfTroubleRef} className="pt-4">
            <BarChart
              width={detailsOfTroubleWidth}
              height={300}
              data={[
                { name: "Stress ", stress: [0, detailsOfTrouble.stress] }
              ]}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]}/>
              <YAxis dataKey="name" type="category"/>
              <Bar dataKey="stress" fill="#0A48B3" />
            </BarChart>
          </div>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle className="mb-0">Niveau d'intervention</CardTitle>
          </CardHeader>
          <CardBody>
            <div ref={needForInterventionsRef}>
              <BarChart
                width={needForInterventionsWidth}
                height={300}
                data={ [
                  { name: "Pas d'intervention nécessaire", value: needForInterventions.important },
                  { name: "Préventif", value: needForInterventions.preventive },
                  { name: "Modéré", value: needForInterventions.moderate },
                  { name: "Urgent", value: needForInterventions.urgent }
                ] }
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
    </Row>
  )
}


export default Stats
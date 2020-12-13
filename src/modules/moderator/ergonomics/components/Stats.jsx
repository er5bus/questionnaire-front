import React, {useRef} from 'react'

import CustomizedAxisTick from './../../../../components/CustomizedAxisTick'
import useResize from './../../../../hooks/useResize'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from 'reactstrap';


const Stats = ({ needForInterventions, detailsOfTrouble }) => {

  const detailsOfTroubleRef = useRef()
  const needForInterventionsRef = useRef()

  const { width: detailsOfTroubleWidth } = useResize(detailsOfTroubleRef)
  const { width: needForInterventionsWidth } = useResize(needForInterventionsRef)

  return (
    <Row>

      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle className="mb-0">Détail des troubles</CardTitle>
          </CardHeader>
          <CardBody>
            <div ref={detailsOfTroubleRef} className="pt-4">
              <BarChart
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                width={detailsOfTroubleWidth}
                height={250}
                data={[
                  { name: "Ergonomie ", points: [0, detailsOfTrouble.ergonomics], fill: "#062484"  , radius:30 }
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
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle className="mb-0">Niveau d'intervention</CardTitle>
          </CardHeader>
          <CardBody>
            <div ref={needForInterventionsRef}>
              <BarChart
                width={needForInterventionsWidth}
                height={250}
                margin={{ top: 5, right: 10, left: 10, bottom: 50 }}
                data={ [
                  { name: "Pas d'intervention nécessaire", value: needForInterventions.important , fill: "#062484"   ,radius:30 },
                  { name: "Préventif", value: needForInterventions.preventive , fill: "#D08528"   , radius:30  },
                  { name: "Modéré", value: needForInterventions.moderate , fill: "#EB404C"   , radius:30  },
                  { name: "Urgent", value: needForInterventions.urgent , fill: "#BF4F3B"   , radius:30 }
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

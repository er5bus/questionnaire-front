import React from "react"
import { connect } from "react-redux"
//import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next"

// reactstrap components
import { Container, Col, Row, Card, CardTitle, Button, Breadcrumb, BreadcrumbItem, Progress } from "reactstrap"


class Dashbord extends React.Component {

  render() {
    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> DRH & suivi général </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem active><i className="fas fa-home"></i> Invitations List </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Button className="btn btn-sm btn-success">
                    Envoyer Questionnaire
                  </Button>
                  <Button className="btn btn-sm btn-neutral">
                    Extraire tout
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <Row>
            <Col lg="8">
              <Card body>
                <CardTitle>Forme générale des salariés</CardTitle>
              </Card>
            </Col>
            <Col lg="4">
              <Card body>
                <CardTitle>% de questionnaires complétés</CardTitle>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <Card body>
                <CardTitle>Etat de forme par secteur</CardTitle>
                <div className="pt-4">
                  <Row>
                    <Col lg="4">
                      TMS
                    </Col>
                    <Col lg="8">
                      <Progress value="25" />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      RPS
                    </Col>
                    <Col lg="8">
                      <Progress color="success" value="75" />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Ergonomie
                    </Col>
                    <Col lg="8">
                      <Progress color="info" value="60" />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Nutrition
                    </Col>
                    <Col lg="8">
                      <Progress color="danger" value="50" />
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col lg="4">
                      Activités physiques
                    </Col>
                    <Col lg="8">
                      <Progress  color="warning" value="80" />
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col lg="4">
              <Card body>
                <CardTitle>Besoins interventionnels</CardTitle>
                <div className="text-center">
                  <p> Ostéo </p>
                  <p> Coach </p>
                  <p> sportif Diététique </p>
                  <p>Kiné </p>
                  <p>Ergo </p>
                  <p>Psy</p>
                  <p>Gestes et postures</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => state.dashbord

export default connect(mapStateToProps)(withTranslation()(Dashbord))

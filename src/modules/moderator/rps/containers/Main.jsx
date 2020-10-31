import React from "react"
import { connect } from "react-redux"
//import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next"

import { fetchDetailsOfTroubles, fetchNeedForInterventions, fetchAlldepartment } from "./../actions"

// reactstrap components
import { Container, Col, Row, Card, CardTitle, Button, Breadcrumb, BreadcrumbItem, CardBody, CardHeader } from "reactstrap"
import FilterByDepartment from "../components/FilterByDepartment"
import Stats from "../components/Stats"


class Dashbord extends React.Component {

  UNSAFE_componentWillMount(){
    this.props.fetchAlldepartment(this.props.user.company.id)
  }

  onSubmit = (values) => {
    const { department } = values
    this.props.fetchNeedForInterventions(department)
    this.props.fetchDetailsOfTroubles(department)
  }

  render() {

    const { departments, needForInterventions, detailsOfTrouble, isLoading } = this.props
    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> RPS </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem active><i className="fas fa-home"></i> RPS </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  {/*<Button className="btn btn-sm btn-success">
                    Ajouter au planning
                  </Button>
                  <Button className="btn btn-sm btn-neutral">
                    Extraire tout
                  </Button>*/}
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <Row>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle className="mb-0">Filtrer par département</CardTitle>
                </CardHeader>
                <CardBody>
                  <FilterByDepartment departments={departments} onSubmit={this.onSubmit} isLoading={isLoading} />
                </CardBody>
              </Card>
              { (needForInterventions && detailsOfTrouble) && <Stats needForInterventions={needForInterventions} detailsOfTrouble={detailsOfTrouble} />}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.rps, ...state.session })

export default connect(mapStateToProps, { fetchDetailsOfTroubles, fetchNeedForInterventions, fetchAlldepartment })(withTranslation()(Dashbord))

import React from "react"
import { connect } from "react-redux"
//import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next"

// reactstrap components
import { Container, Col, Row, Card, CardTitle,  CardBody, CardHeader, Breadcrumb, BreadcrumbItem, Progress } from "reactstrap"


import {   fetchAlldepartment , fetchBreakdownOfFailures ,  fetchNeedForInterventions } from "./../actions"
import FilterByDepartment from "../components/FilterByDepartment"
import Stats from "../components/Stats"


class Dashbord extends React.Component {


  UNSAFE_componentWillMount(){

    this.props.fetchAlldepartment(this.props.user.company.id)
    console.log("props",this.props)
  }

  onSubmit = (values) => {

    const { department } = values

    this.props.fetchBreakdownOfFailures(department)
    this.props.fetchNeedForInterventions(department)
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }
  render() {
    const { departments,  needForInterventions, breakdownOfFailures,   isLoading } = this.props
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
                {/* <Col  lg="6" className="text-right">
                  <Button className="btn btn-sm btn-success">
                    Envoyer Questionnaire
                  </Button>
                  <Button className="btn btn-sm btn-neutral">
                    Extraire tout
                  </Button>
                </Col> */}
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
              { (needForInterventions && breakdownOfFailures) && <Stats needForInterventions={needForInterventions} breakdownOfFailures={breakdownOfFailures} />}
            </Col>
          </Row>
        </Container>

      </>
    )
  }
}



const mapStateToProps = state => ( { ...state.dashbordModerator, ...state.session })

export default connect(mapStateToProps, {fetchBreakdownOfFailures ,  fetchNeedForInterventions ,  fetchAlldepartment })(withTranslation()(Dashbord))

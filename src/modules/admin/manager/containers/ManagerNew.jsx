import React from "react"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"

import adminRoutes from './../../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { createManager, clearManagerForm } from "./../actions"

import ManagerForm from "./../components/ManagerForm"

class ManagerNew extends React.Component {

  componentWillMount() {
    this.props.clearManagerForm()
  }

  onSubmit = (values) => {
    this.props.createManager(this.props.match.params.companyParam, values)
  }

  render() {
    const { error, item, isLoading } = this.props
    const { companyParam } = this.props.match.params

    if (item && item.param){
      return <Redirect to={ adminRoutes.path + adminRoutes.routes.managerEdit.path.replace(":companyParam", companyParam).replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> Responsable </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ adminRoutes.path + adminRoutes.routes.managerList.path.replace(":companyParam", companyParam) }>
                          <i className="fas fa-home"></i> Liste des responsables
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> Créer un responsable</BreadcrumbItem>
                    </Breadcrumb>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <Container className="mt--4" fluid>
            <Row className="justify-content-center">
              <Col lg="12" md="12">
                <Card className="shadow">
                  <CardBody className="px-lg-5 py-lg-5">
                    <ManagerForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )
    }
  }
}


const mapStateToProps = state => state.manager

export default connect(mapStateToProps, { createManager, clearManagerForm })(ManagerNew)

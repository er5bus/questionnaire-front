import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"

import adminRoutes from './../../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { createCompany, clearCompanyForm } from "./../actions"

import CompanyForm from "./../components/CompanyForm"

class CompanyNew extends React.Component {

  componentWillMount() {
    this.props.clearCompanyForm()
  }

  onSubmit = (values) => {
    this.props.createCompany(values)
  }

  render() {
    const { error, item, isLoading } = this.props
    if (item && item.param){
      return <Redirect to={ adminRoutes.path + adminRoutes.routes.companyEdit.path.replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> Entreprise </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ adminRoutes.path + adminRoutes.routes.companyList.path }>
                          <i className="fas fa-home"></i> Liste des entreprises
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> Créer une entreprise </BreadcrumbItem>
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
                    <CompanyForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
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


const mapDispatchToProps = (dispatch) => bindActionCreators({ createCompany, clearCompanyForm }, dispatch)
const mapStateToProps = state => state.company

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNew)

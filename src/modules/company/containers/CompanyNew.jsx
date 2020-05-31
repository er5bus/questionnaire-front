import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import superAdminRoutes from './../../../routes/superAdmin'

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
    const { error, t, item, isLoading } = this.props
    if (item && item.param){
      return <Redirect to={ superAdminRoutes.path + superAdminRoutes.routes.companyEdit.path.replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Company") } </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ superAdminRoutes.path + superAdminRoutes.routes.companyList.path }>
                          <i class="fas fa-home"></i> {t(" Company List")}
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> {t(" Create company")}</BreadcrumbItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CompanyNew))

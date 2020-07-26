import React from "react"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import moderatorRoutes from './../../../../routes/moderator'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { createEmployee, clearEmployeeForm } from "./../actions"

import EmployeeForm from "./../components/EmployeeForm"

class EmployeeNew extends React.Component {

  componentWillMount() {
    this.props.clearEmployeeForm()
  }

  onSubmit = (values) => {
    const { company } = this.props.user
    this.props.createEmployee(company.id, values)
  }

  render() {
    const { error, t, item, isLoading } = this.props
    if (item && item.param){
      return <Redirect to={ moderatorRoutes.path + moderatorRoutes.routes.employeeEdit.path.replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Employee") } </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ moderatorRoutes.path + moderatorRoutes.routes.employeeList.path }>
                          <i className="fas fa-home"></i> {t(" Employee List")}
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> {t(" Create Employee")}</BreadcrumbItem>
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
                    <EmployeeForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
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


const mapStateToProps = state => ({ ...state.employee, user: state.session.user })

export default connect(mapStateToProps, { createEmployee, clearEmployeeForm })(withTranslation()(EmployeeNew))

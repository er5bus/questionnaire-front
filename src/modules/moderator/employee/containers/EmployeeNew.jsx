import React from "react"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"

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
    this.props.createEmployee(this.props.match.params.departmentParam, values)
  }

  render() {
    const { error, item, isLoading } = this.props
    const { departmentParam } = this.props.match.params

    if (item && item.param){
      return <Redirect to={ moderatorRoutes.path + moderatorRoutes.routes.employeeEdit.path.replace(":departmentParam", departmentParam).replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> Employée </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ moderatorRoutes.path + moderatorRoutes.routes.employeeList.path.replace(":departmentParam", departmentParam) }>
                          <i className="fas fa-home"></i> Liste des employés
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> Créer un employé </BreadcrumbItem>
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

export default connect(mapStateToProps, { createEmployee, clearEmployeeForm })(EmployeeNew)

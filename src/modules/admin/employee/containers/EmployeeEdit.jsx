import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import adminRoutes from './../../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { editEmployee, fetchEmployee } from "./../actions"

import EmployeeForm from "./../components/EmployeeForm"

class EmployeeEdit extends React.Component {

  componentWillMount(){
    this.props.fetchEmployee(this.props.match.params)
  }

  onSubmit = (values) => {
    const { departmentParam, param } = this.props.match.params
    this.props.editEmployee(departmentParam, param, values)
  }

  render() {
    const { error, t, isLoading } = this.props
    const { departmentParam } = this.props.match.params

    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Employees") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem>
                      <Link to={ adminRoutes.path + adminRoutes.routes.employeeList.path.replace(":departmentParam", departmentParam) }>
                        <i className="fas fa-home"></i> {t(" Employee List")}
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active><i className="fas fa-pencil-alt"></i> {t(" Edit employee")}</BreadcrumbItem>
                  </Breadcrumb>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container className="mt--4" fluid>
          <Row className="justify-content-center">
            <Col lg="12">
              <Card className="shadow">
                <CardBody className="px-lg-5 py-lg-5">
                  <EmployeeForm onSubmit={this.onSubmit} errors={error} isLoading={isLoading} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => state.user

export default connect(mapStateToProps, { editEmployee, fetchEmployee })(withTranslation()(EmployeeEdit))

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import adminRoutes from './../../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import { editDepartment, fetchDepartment } from './../actions'

import DepartmentForm from './../components/DepartmentForm'

class DepartmentEdit extends React.Component {

  componentWillMount(){
    this.props.fetchDepartment(this.props.user.company.id, this.props.match.params.param)
  }

  onSubmit = (values) => {
    const { item } = this.props
    this.props.editDepartment(this.props.user.company.id, item.id, values)
  }

  render() {
    const { error, t, isLoading } = this.props
    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Departments") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem>
                      <Link to={ adminRoutes.path + adminRoutes.routes.departmentList.path }>
                        <i className="fas fa-home"></i> {t(" Department List")}
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active><i className="fas fa-pencil-alt"></i> {t(" Edit department")}</BreadcrumbItem>
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
                  <DepartmentForm onSubmit={this.onSubmit} errors={error} isLoading={isLoading} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.department, ...state.session })

export default connect(mapStateToProps, { editDepartment, fetchDepartment })(withTranslation()(DepartmentEdit))

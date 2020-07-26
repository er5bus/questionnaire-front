import React from "react"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"

import adminRoutes from './../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { createUser, clearUserForm } from "./../actions"

import UserForm from "./../components/UserForm"

class UserNew extends React.Component {

  componentWillMount() {
    this.props.clearUserForm()
  }

  onSubmit = (values) => {
    this.props.createUser(values)
  }

  render() {
    const { error, t, item, isLoading } = this.props
    if (item && item.param){
      return <Redirect to={ adminRoutes.path + adminRoutes.routes.userEdit.path.replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" User") } </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ adminRoutes.path + adminRoutes.routes.userList.path }>
                          <i className="fas fa-home"></i> {t(" User List")}
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i> {t(" Create user")}</BreadcrumbItem>
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
                    <UserForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
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


const mapStateToProps = state => state.user

export default connect(mapStateToProps, { createUser, clearUserForm })(withTranslation()(UserNew))

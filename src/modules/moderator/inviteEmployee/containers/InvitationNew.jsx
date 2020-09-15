import React from "react"
import { connect } from "react-redux"
import { Redirect, Link } from "react-router-dom"

import moderatorRoutes from './../../../../routes/moderator'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { createInvitation, clearInvitationStore } from "./../actions"

import InvitationForm from "./../components/InvitationForm"


class InvitationNew extends React.Component {

  componentWillMount() {
    this.props.clearInvitationStore()
  }

  onSubmit = (values) => {
    const { departmentParam } = this.props.match.params
    this.props.createInvitation(departmentParam, values)
  }

  render() {
    const { departmentParam } = this.props.match.params
    const { error, item, isLoading } = this.props
    if (item && item.param){
      return <Redirect to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeEdit.path.replace(":param", item.param) } />
    }else {
      return (
        <>
          <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> Invitation des employés </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeList.path.replace(":departmentParam", departmentParam) }>
                          <i className="fas fa-home"></i> Liste d'invitations
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i className="fas fa-plus-circle"></i>Créer une invitation </BreadcrumbItem>
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
                    <InvitationForm onSubmit={this.onSubmit} isLoading={isLoading} errors={error || {}} />
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


const mapStateToProps = state => state.inviteEmployee

export default connect(mapStateToProps, { createInvitation, clearInvitationStore })(InvitationNew)

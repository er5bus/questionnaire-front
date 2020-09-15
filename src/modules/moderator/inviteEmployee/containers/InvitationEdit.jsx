import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import moderatorRoutes from './../../../../routes/moderator'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { editInvitation, fetchInvitation } from "./../actions"

import InvitationForm from "./../components/InvitationForm"

class InvitationEdit extends React.Component {

  componentWillMount(){
    this.props.fetchInvitation(this.props.match.params)
  }

  onSubmit = (values) => {
    const { departmentParam, employeeParam } = this.props.match.params
    this.props.editInvitation(departmentParam, employeeParam, values)
  }

  render() {
    const { departmentParam } = this.props.match.params
    const { error, isLoading } = this.props
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
                      <BreadcrumbItem active><i className="fas fa-pencil-alt"></i> Modifier l'invitation </BreadcrumbItem>
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
                <InvitationForm onSubmit={this.onSubmit} errors={error} isLoading={isLoading} />
              </CardBody>
            </Card>
          </Col>
        </Row>
            </Container>
      </>
    )
  }
}


const mapStateToProps = state => state.inviteEmployee

export default connect(mapStateToProps, { editInvitation, fetchInvitation })(InvitationEdit)

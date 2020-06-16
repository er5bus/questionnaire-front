import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
import adminRoutes from './../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { editInvitation, fetchInvitation } from "./../actions"

import InvitationForm from "./../components/InvitationForm"

class InvitationEdit extends React.Component {

  componentWillMount(){
    console.log(this.props.match.params)
    this.props.fetchInvitation(this.props.match.params)
  }

  onSubmit = (values) => {
    const { companyParam, managerParam } = this.props.match.params
    this.props.editInvitation(companyParam, managerParam, values)
  }

  render() {
    const { companyParam } = this.props.match.params
    const { error, t, isLoading } = this.props
    return (
      <>
        <div className="header bg-primary pb-5">
            <Container fluid>
              <div className="header-body">
                <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Manager Invitations") } </h6>
                <Row className="align-items-center py-2">
                  <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem>
                        <Link to={ adminRoutes.path + adminRoutes.routes.invitationManagerList.path.replace(":companyParam", companyParam) }>
                          <i class="fas fa-home"></i> {t(" Invitation List")}
                        </Link>
                      </BreadcrumbItem>
                      <BreadcrumbItem active><i class="fas fa-pencil-alt"></i> {t(" Edit invitation")}</BreadcrumbItem>
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


const mapStateToProps = state => state.inviteManager

export default connect(mapStateToProps, { editInvitation, fetchInvitation })(withTranslation()(InvitationEdit))

import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
import adminRoutes from './../../../routes/admin'

// reactstrap components
import { Card, Row, CardBody, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap"

import { editCompany, fetchCompany } from "./../actions"

import CompanyForm from "./../components/CompanyForm"

class CompanyEdit extends React.Component {

  componentWillMount(){
    this.props.fetchCompany(this.props.match.params)
  }

  onSubmit = (values) => {
    const { item } = this.props
    this.props.editCompany(item.id, values)
  }

  render() {
    const { error, t, isLoading } = this.props
    return (
      <>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block pt-4 ml-md-3"> { t(" Companies") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem>
                      <Link to={ adminRoutes.path + adminRoutes.routes.companyList.path }>
                        <i className="fas fa-home"></i> {t(" Company List")}
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active><i className="fas fa-pencil-alt"></i> {t(" Edit company")}</BreadcrumbItem>
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
                  <CompanyForm onSubmit={this.onSubmit} errors={error} isLoading={isLoading} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({ editCompany, fetchCompany }, dispatch)
const mapStateToProps = state => state.company

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CompanyEdit))

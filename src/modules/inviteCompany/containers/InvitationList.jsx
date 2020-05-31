import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"
import { withTranslation } from 'react-i18next'

import superAdminRoutes from './../../../routes/superAdmin'

import ConfirmModal from "./../../../components/ConfirmModal"
import CardNotFound from "./../../../components/CardNotFound"
import InfiniteScroll from './../../../components/InfiniteScroll'

import InvitationItem from "./../components/InvitationItem"
import InvitationLoader from "./../components/InvitationLoader"

import { fetchInvitations, filterInvitations, deleteInvitation } from "./../actions"
import { getFilteredInvitations } from "./../selector"


//import Moment from 'react-moment'


class InvitationList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openModal: false,
      id: null,
    }
  }

  onToggleModal = (id) => {
    this.setState({ openModal: !this.state.openModal, id })
  }

  onFetchInvitations = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchInvitations(pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterInvitations(e.target.value.trim())
  }

  onDeleteInvitation = () => {
    this.props.deleteInvitation(this.state.id)
  }

  render() {
    const { t, items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> { t(" Company Invitations") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i class="fas fa-home"></i> {t(" Invitations List")}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={ superAdminRoutes.path + superAdminRoutes.routes.invitationNew.path } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    {t('New company invitation')}
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <ConfirmModal
            isOpen={ this.state.openModal }
            title={ t("Confirmation") }
            content={ t("Are you sure you want to delete this tag ?") }
            onClick={ this.onDeleteInvitation }
            onToggle={ this.onToggleModal }
            buttonText={ t("Delete this tag") }
          />
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchInvitations}
                  pageNumber={ page }
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<InvitationLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => <InvitationItem key={i} {...tag} onToggleModal={this.onToggleModal} />)}
                </InfiniteScroll>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchInvitations, deleteInvitation, filterInvitations }, dispatch)
const mapStateToProps = state => ({
  ...state.inviteCompany, items: getFilteredInvitations(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(InvitationList))

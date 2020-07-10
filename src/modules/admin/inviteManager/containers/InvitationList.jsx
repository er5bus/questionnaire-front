import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import adminRoutes from './../../../../routes/admin'

import ConfirmModal from './../../../../components/ConfirmModal'
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import InvitationItem from './../components/InvitationItem'
import InvitationLoader from './../components/InvitationLoader'

import { fetchInvitations, filterInvitations, deleteInvitation, sendInvitation, clearInvitationStore } from './../actions'
import { getFilteredInvitations } from './../selector'

class InvitationList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openSendInvitationModal: false,
      openDeleteModal: false,
      id: null,
    }
  }

  componentDidMount(){
    this.props.clearInvitationStore()
  }

  onToggleSendInvitationModal = (id) => {
    this.setState({ openSendInvitationModal: !this.state.openSendInvitationModal, id })
  }

  onToggleDeleteModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  onFetchInvitations = (pageNumber) => {
    if (!this.props.isLoading){
      const { companyParam } = this.props.match.params
      this.props.fetchInvitations(companyParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterInvitations(e.target.value.trim())
  }

  onDeleteInvitation = () => {
    const { companyParam } = this.props.match.params
    this.props.deleteInvitation(companyParam, this.state.id)
  }

  onSendInvitation = () => {
    const { companyParam } = this.props.match.params
    this.props.sendInvitation(companyParam, this.state.id)
  }

  render() {
    const { companyParam } = this.props.match.params
    const { t, items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> { t(" Manager Invitations") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> {t(" Invitations List")}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={ adminRoutes.path + adminRoutes.routes.invitationManagerNew.path.replace(":companyParam", companyParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    {t('New manager invitation')}
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <ConfirmModal
            isOpen={ this.state.openDeleteModal }
            title={ t("Confirmation") }
            content={ t("Are you sure you want to delete this invitation ?") }
            onClick={ this.onDeleteInvitation }
            onToggle={ this.onToggleDeleteModal }
            buttonText={ t("Delete this invitation") }
          />
          <ConfirmModal
            isOpen={ this.state.openSendInvitationModal }
            title={ t("Confirmation") }
            content={ t("Are you sure you want to send this invitation ?") }
            onClick={ this.onSendInvitation }
            onToggle={ this.onToggleSendInvitationModal }
            buttonText={ t("Send this invitation") }
          />
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchInvitations}
                  pageNumber={ page }
                  clearStore={true}
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<InvitationLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => 
                    <InvitationItem 
                      key={i} 
                      companyParam={companyParam} 
                      {...tag} 
                      onToggleDeleteModal={this.onToggleDeleteModal} 
                      onToggleSendInvitationModal={this.onToggleSendInvitationModal}
                    />
                  )}
                </InfiniteScroll>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.inviteManager, items: getFilteredInvitations(state)
})

export default connect(mapStateToProps, { fetchInvitations, deleteInvitation, sendInvitation, filterInvitations, clearInvitationStore })(withTranslation()(InvitationList))

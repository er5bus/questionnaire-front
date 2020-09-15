import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import moderatorRoutes from './../../../../routes/moderator'

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

  onToggleSendInvitationModal = (id) => {
    this.setState({ openSendInvitationModal: !this.state.openSendInvitationModal, id })
  }

  onToggleDeleteModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  onFetchInvitations = (pageNumber) => {
    if (!this.props.isLoading){
      const { departmentParam } = this.props.match.params
      this.props.fetchInvitations(departmentParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterInvitations(e.target.value.trim())
  }

  onDeleteInvitation = () => {
    const { departmentParam } = this.props.match.params
    this.props.deleteInvitation(departmentParam, this.state.id)
  }

  onSendInvitation = () => {
    const { departmentParam } = this.props.match.params
    this.props.sendInvitation(departmentParam, this.state.id)
  }

  render() {
    const { departmentParam } = this.props.match.params
    const { items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> Invitations des employés </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> Liste d'invitations </BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={ moderatorRoutes.path + moderatorRoutes.routes.invitationEmployeeNew.path.replace(":departmentParam", departmentParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    Invitation de nouvel employé
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <ConfirmModal
            isOpen={ this.state.openDeleteModal }
            title="Confirmation"
            content="Êtes-vous sûr de vouloir supprimer cette invitation?"
            onClick={ this.onDeleteInvitation }
            onToggle={ this.onToggleDeleteModal }
            buttonText="Supprimer cette invitation"
          />
          <ConfirmModal
            isOpen={ this.state.openSendInvitationModal }
            title="Confirmation"
            content="Êtes-vous sûr d'envoyer cette invitation?"
            onClick={ this.onSendInvitation }
            onToggle={ this.onToggleSendInvitationModal }
            buttonText="Envoyez cette invitation"
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
                  { items.map((invitation, i) => 
                    <InvitationItem 
                      key={i} 
                      departmentParam={departmentParam} 
                      {...invitation} 
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
  ...state.inviteEmployee, items: getFilteredInvitations(state)
})

export default connect(mapStateToProps, { fetchInvitations, deleteInvitation, sendInvitation, filterInvitations, clearInvitationStore })(InvitationList)

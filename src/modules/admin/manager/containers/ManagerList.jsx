import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import adminRoutes from './../../../../routes/admin'

import ConfirmModal from "./../../../../components/ConfirmModal"
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import ManagerItem from './../components/ManagerItem'
import ManagerLoader from './../components/ManagerLoader'

import { fetchManagers, filterManagers, deleteManager } from './../actions'
import { getFilteredManagers } from './../selector'


//import Moment from 'react-moment'


class ManagerList extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      openDeleteModal: false,
      id: null,
    }
  }

  onFetchManagers = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchManagers(this.props.match.params.companyParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterManagers(e.target.value.trim())
  }

  onToggleModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  onDelete = () => {
    const { companyParam } = this.props.match.params
    this.props.deleteManager(companyParam, this.state.id)
  }

  render() {
    const { items, page, hasMore, isLoading } = this.props
    const { companyParam } = this.props.match.params
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> Responsables </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> Liste des responsables</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={ adminRoutes.path + adminRoutes.routes.managerNew.path.replace(":companyParam", companyParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    Nouveau responsable
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
            content="Êtes-vous sûr de vouloir supprimer cette responsable?"
            onClick={ this.onDelete }
            onToggle={ this.onToggleModal }
            buttonText="Supprimer cette responsable"
          />
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchManagers}
                  pageNumber={ page }
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<ManagerLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => <ManagerItem key={i} {...tag} companyParam={companyParam} onToggleModal={this.onToggleModal} />)}
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
  ...state.manager, items: getFilteredManagers(state)
})

export default connect(mapStateToProps, { fetchManagers, filterManagers, deleteManager })(ManagerList)

import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import moderatorRoutes from './../../../../routes/moderator'

import ConfirmModal from "./../../../../components/ConfirmModal"
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import DepartmentItem from './../components/DepartmentItem'
import DepartmentLoader from './../components/DepartmentLoader'

import { fetchDepartments, filterDepartments, deleteDepartment } from './../actions'
import { getFilteredDepartments } from './../selector'

//import Moment from 'react-moment'


class DepartmentList extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      openDeleteModal: false,
      id: null,
    }
  }

  onFetchDepartments = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchDepartments(this.props.user.company.id, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterDepartments(e.target.value.trim())
  }

  onDelete = () => {
    this.props.deleteDepartment(this.props.user.company.id, this.state.id)
  }

  onToggleModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  render() {
    const { items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> Départements </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> Liste des départements </BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={  moderatorRoutes.path + moderatorRoutes.routes.departmentNew.path } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    Nouveau département
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
            content="Êtes-vous sûr de vouloir supprimer cette department?"
            onClick={ this.onDelete }
            onToggle={ this.onToggleModal }
            buttonText="Supprimer cette department"
          />
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchDepartments}
                  pageNumber={ page }
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<DepartmentLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => <DepartmentItem key={i} {...tag} onToggleModal={this.onToggleModal} />)}
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
  ...state.department, ...state.session, items: getFilteredDepartments(state)
})

export default connect(mapStateToProps, { fetchDepartments, filterDepartments, deleteDepartment })(DepartmentList)

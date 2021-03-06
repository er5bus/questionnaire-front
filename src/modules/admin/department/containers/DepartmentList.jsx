import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import adminRoutes from './../../../../routes/admin'

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
      this.props.fetchDepartments(this.props.match.params.companyParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterDepartments(e.target.value.trim())
  }

  onToggleModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  onDelete = () => {
    const { companyParam } = this.props.match.params
    this.props.deleteDepartment(companyParam, this.state.id)
  }

  render() {
    const { t, items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> { t(" Departments") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                  <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                    <BreadcrumbItem active><i className="fas fa-home"></i> {t(" Departments List")}</BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                {/* <Col  lg="6" className="text-right">
                  <Link to={  adminRoutes.path + adminRoutes.routes.departmentList.path.replace(":companyParam", companyParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    {t('New department')}
                  </Link>
                </Col>   */}
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

export default connect(mapStateToProps, { fetchDepartments, filterDepartments, deleteDepartment })(withTranslation()(DepartmentList))

import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import adminRoutes from './../../../../routes/admin'

import ConfirmModal from "./../../../../components/ConfirmModal"
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import EmployeeItem from './../components/EmployeeItem'
import EmployeeLoader from './../components/EmployeeLoader'

import { fetchEmployees, filterEmployees, deleteEmployee } from './../actions'
import { getFilteredEmployees } from './../selector'


//import Moment from 'react-moment'


class EmployeeList extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      openDeleteModal: false,
      id: null,
    }
  }

  onFetchEmployees = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchEmployees(this.props.match.params.departmentParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterEmployees(e.target.value.trim())
  }

  onToggleModal = (id) => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, id })
  }

  onDelete = () => {
    const { departmentParam } = this.props.match.params
    this.props.deleteEmployee(departmentParam, this.state.id)
  }

  render() {
    const { t, items, page, hasMore, isLoading } = this.props
    const { departmentParam } = this.props.match.params
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> { t(" Employees") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> {t(" Employees List")}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                {/* <Col  lg="6" className="text-right">
                  <Link to={ moderatorRoutes.path + moderatorRoutes.routes.employeeNew.path.replace(":departmentParam", departmentParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    {t('New Employee')}
                  </Link>
                </Col> */}
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <ConfirmModal
            isOpen={ this.state.openDeleteModal }
            title="Confirmation"
            content="Êtes-vous sûr de vouloir supprimer cette employee?"
            onClick={ this.onDelete }
            onToggle={ this.onToggleModal }
            buttonText="Supprimer cette employee"
          />
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchEmployees}
                  pageNumber={ page }
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<EmployeeLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => <EmployeeItem key={i} {...tag} departmentParam={departmentParam} onToggleModal={this.onToggleModal} />)}
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
  ...state.employee, user: state.session.user, items: getFilteredEmployees(state)
})

export default connect(mapStateToProps, { fetchEmployees, filterEmployees, deleteEmployee })(withTranslation()(EmployeeList))

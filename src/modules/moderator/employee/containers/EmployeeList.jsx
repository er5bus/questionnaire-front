import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import moderatorRoutes from './../../../../routes/moderator'

//import ConfirmModal from "./../../../components/ConfirmModal"
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import EmployeeItem from './../components/EmployeeItem'
import EmployeeLoader from './../components/EmployeeLoader'

import { fetchEmployees, filterEmployees } from './../actions'
import { getFilteredEmployees } from './../selector'


//import Moment from 'react-moment'


class EmployeeList extends React.Component {
  
  onFetchEmployees = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchEmployees(this.props.match.params.departmentParam, pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterEmployees(e.target.value.trim())
  }

  render() {
    const { items, page, hasMore, isLoading } = this.props
    const { departmentParam } = this.props.match.params
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> Employées </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i className="fas fa-home"></i> Liste des employés </BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col  lg="6" className="text-right">
                  <Link to={ moderatorRoutes.path + moderatorRoutes.routes.employeeNew.path.replace(":departmentParam", departmentParam) } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    Nouvel employé
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
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

export default connect(mapStateToProps, { fetchEmployees, filterEmployees })(EmployeeList)

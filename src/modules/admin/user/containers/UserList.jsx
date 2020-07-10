import React from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//import { Link } from "react-router-dom"
import { withTranslation } from 'react-i18next'

///import adminRoutes from './../../../routes/admin'

//import ConfirmModal from "./../../../components/ConfirmModal"
import CardNotFound from './../../../../components/CardNotFound'
import InfiniteScroll from './../../../../components/InfiniteScroll'

import UserItem from './../components/UserItem'
import UserLoader from './../components/UserLoader'

import { fetchUsers, filterUsers } from './../actions'
import { getFilteredUsers } from './../selector'


//import Moment from 'react-moment'


class UserList extends React.Component {
  
  onFetchUsers = (pageNumber) => {
    if (!this.props.isLoading){
      this.props.fetchUsers(pageNumber)
    }
  }

  onSearch = (e) => {
    this.props.filterUsers(e.target.value.trim())
  }

  render() {
    const { t, items, page, hasMore, isLoading } = this.props
    return (
      <div>
        <div className="header bg-primary pb-5">
          <Container fluid>
            <div className="header-body">
              <h6 className="h2 text-white d-inline-block mb-0 pt-4 ml-md-3"> { t(" Users") } </h6>
              <Row className="align-items-center py-2">
                <Col lg="6">
                    <Breadcrumb className="breadcrumb-links breadcrumb-dark">
                      <BreadcrumbItem active><i class="fas fa-home"></i> {t(" Users List")}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                {/*<Col  lg="6" className="text-right">
                  <Link to={ adminRoutes.path + adminRoutes.routes.userNew.path } className="btn btn-sm btn-neutral">
                    <i className="fas fa-plus-circle" /> { " " }
                    {t('New user')}
                  </Link>
                </Col>*/}
              </Row>
            </div>
          </Container>
        </div>

        <Container className="mt--4" fluid>
          <Row>
            <Col lg="12">
              <Row className="row-grid">
                <InfiniteScroll
                  loadMore={this.onFetchUsers}
                  pageNumber={ page }
                  isLoading={isLoading}
                  hasMore={ hasMore }
                  loader={<UserLoader />}
                >
                  { !isLoading && !items.length && <CardNotFound /> }
                  { items.map((tag, i) => <UserItem key={i} {...tag} onToggleModal={this.onToggleModal} />)}
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
  ...state.user, items: getFilteredUsers(state)
})

export default connect(mapStateToProps, { fetchUsers, filterUsers })(withTranslation()(UserList))

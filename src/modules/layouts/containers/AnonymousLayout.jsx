import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap"
import { Redirect, Switch, Route } from "react-router-dom"

import { isAdmin, isModerator } from './../../../utils/helpers'

import anonymousRoutes from './../../../routes/anonymous'
import adminRoutes from './../../../routes/admin'
import moderatorRoutes from './../../../routes/moderator'

import Notifications from 'react-notification-system-redux'

import signinLeftImg from './../../../assets/img/signin-left.svg'
import signinRightImg from './../../../assets/img/signin-right.svg'

class AnonymousLayout extends React.Component {

  render () {
    const { authenticated, user: { role }, notifications = null } = this.props

    if (authenticated && isAdmin(role) ){
      return <Redirect to={adminRoutes.path} />
    }else if (authenticated && isModerator(role) ){
      return <Redirect to={moderatorRoutes.path} />
    }else {
      return (<>
        { notifications && <Notifications notifications={notifications} />}
        <div className="vh-100 bg-soft d-flex align-items-center">
          {/* Page content */}
          <Container className="section-content">
            <Row className="justify-content-center">
              <Col lg="2" style={{ backgroundImage: `url(${signinLeftImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
              <Switch>
                {
                  Object.keys(anonymousRoutes.routes).map((routeName, i) =>
                    anonymousRoutes.routes[routeName].path &&
                    <Route
                      key={i}
                      exact path={ anonymousRoutes.path + anonymousRoutes.routes[routeName].path}
                      component={anonymousRoutes.routes[routeName].component}
                    />
                  )
                }
                <Redirect from="*" to={ anonymousRoutes.path + anonymousRoutes.routes.login.path } />
              </Switch>
              <Col lg="2" style={{ backgroundImage: `url(${signinRightImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            </Row>
          </Container>
        </div>
      </>
      )
    }
  }
}

const mapStateToProps = state => ({ ...state.session, notifications: state.notifications })

export default connect(mapStateToProps)(AnonymousLayout)

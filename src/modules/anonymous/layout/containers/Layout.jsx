import React from 'react';
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import newLogo from '../../../../assets/img/newLogo.svg';
import adminRoutes from './../../../../routes/admin';
import anonymousRoutes from './../../../../routes/anonymous';
import employeeRoutes from './../../../../routes/employee';
import moderatorRoutes from './../../../../routes/moderator';
import { isAdmin, isEmployee, isModerator } from './../../../../utils/helpers';




class AnonymousLayout extends React.Component {

  render() {
    const { authenticated, user: { role }, notifications = null } = this.props

    if (authenticated && isAdmin(role)) {
      return <Redirect to={adminRoutes.path + moderatorRoutes.routes.dashbord.path} />
    } else if (authenticated && isModerator(role)) {
      return <Redirect to={moderatorRoutes.path + moderatorRoutes.routes.dashbord.path} />
    } else if (authenticated && isEmployee(role)) {
      return <Redirect to={employeeRoutes.path + employeeRoutes.routes.medicalRecord.path} />
    }
    else {
      return (<>
        {notifications && <Notifications notifications={notifications} />}
        <div className="vh-100 bg-soft d-flex align-items-center" style={{
          position: "relative"
        }}>
          {/* Page content */}
          <div className="fixed-logo">
            <img src={newLogo} alt="logo-new" />
            <p>Predict Analyse</p>
          </div>
          <Container className="section-content">
            <Row className="justify-content-center">
              <Switch>
                {
                  Object.keys(anonymousRoutes.routes).map((routeName, i) =>
                    anonymousRoutes.routes[routeName].path &&
                    <Route
                      key={i}
                      exact path={anonymousRoutes.path + anonymousRoutes.routes[routeName].path}
                      component={anonymousRoutes.routes[routeName].component}
                    />
                  )
                }
                <Redirect from="*" to={anonymousRoutes.path + anonymousRoutes.routes.login.path} />
              </Switch>
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

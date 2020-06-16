import React from "react"
import { connect } from "react-redux"
import { Redirect, Switch, Route } from "react-router-dom"
import { withTranslation } from 'react-i18next'

import adminRoutes from "./../../../routes/admin"
import anonymousRoutes from "./../../../routes/anonymous"

import AdminNavbar from "./../components/AdminNavbar"
import AdminSidebar from './../components/AdminSidebar'

import Notifications from 'react-notification-system-redux'

class AdminLayout extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openMenu: true
    }
  }

  toggle = () => this.setState({ openMenu: !this.state.openMenu })
  
  render() {

    const { user: { username }, authenticated, notifications = null } = this.props

    return !authenticated
      ? <Redirect to={ anonymousRoutes.path } />
      : (
        <div className={ this.state.openMenu ? "g-sidenav-show g-sidenav-pinned" : "g-sidenav-hidden" }>
          { notifications && <Notifications notifications={notifications} />}
          <AdminSidebar
            toggle={ this.toggle }
          />
          <div className="main-content">
            <AdminNavbar userName={username} />
            <Switch>
              {
                Object.keys(adminRoutes.routes).map((routeName, i) =>
                  adminRoutes.routes[routeName].path &&
                  <Route
                    key={i}
                    path={ adminRoutes.path + adminRoutes.routes[routeName].path}
                    component={ adminRoutes.routes[routeName].component}
                  />
                )
              }
            </Switch>
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => ({ ...state.session, notifications: state.notifications })

export default connect(mapStateToProps)(withTranslation()(AdminLayout))

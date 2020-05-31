import React from "react"
import { connect } from "react-redux"
import { Redirect, Switch, Route } from "react-router-dom"
import { withTranslation } from 'react-i18next'

import superAdminRoutes from "./../../../routes/superAdmin"
import anonymousRoutes from "./../../../routes/anonymous"

import SuperAdminNavbar from "./../components/SuperAdminNavbar"
import SuperAdminSidebar from './../components/SuperAdminSidebar'

import Notifications from 'react-notification-system-redux'

class UserLayout extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openMenu: true
    }
  }

  toggle = () => this.setState({ openMenu: !this.state.openMenu })
  getRoutes = () => {
    const { t } = this.props

    return ([
      { path: superAdminRoutes.path + "/dashbord", icon: "ni ni-shop", name: t("Dashboards") },
      { path: superAdminRoutes.path + superAdminRoutes.routes.invitationList.path, icon: "fas fa-envelope-open-text", name: t("Company invitation") },
      { path: superAdminRoutes.path + superAdminRoutes.routes.companyList.path, icon: "fas fa-building", name: t("Company") }
    ])
  }

  render() {

    const { user: { username }, authenticated, notifications = null } = this.props

    return !authenticated
      ? <Redirect to={ anonymousRoutes.path } />
      : (
        <div className={ this.state.openMenu ? "g-sidenav-show g-sidenav-pinned" : "g-sidenav-hidden" }>
          { notifications && <Notifications notifications={notifications} />}
          <SuperAdminSidebar
            routes={ this.getRoutes() }
            toggle={ this.toggle }
          />
          <div className="main-content">
            <SuperAdminNavbar userName={username} />
            <Switch>
              {
                Object.keys(superAdminRoutes.routes).map((routeName, i) =>
                  superAdminRoutes.routes[routeName].path &&
                  <Route
                    key={i}
                    path={ superAdminRoutes.path + superAdminRoutes.routes[routeName].path}
                    component={ superAdminRoutes.routes[routeName].component}
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

export default connect(mapStateToProps)(withTranslation()(UserLayout))

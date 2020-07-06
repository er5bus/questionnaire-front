import React from "react"
import { connect } from "react-redux"
import { Redirect, Switch } from "react-router-dom"
import { withTranslation } from 'react-i18next'

import { isModerator } from './../../../utils/helpers'

import moderatorRoutes from "./../../../routes/moderator"
import anonymousRoutes from "./../../../routes/anonymous"

import AdminNavbar from "./../components/AdminNavbar"
import ModeratorSidebar from './../components/ModeratorSidebar'

import AccessControl from './../../security/AccessControl'

import Notifications from 'react-notification-system-redux'

class ModeratorLayout extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openMenu: true
    }
  }

  toggle = () => this.setState({ openMenu: !this.state.openMenu })

  render() {

    const { user: { username, role }, authenticated, notifications = null } = this.props

    return !authenticated || !isModerator(role)
      ? <Redirect to={ anonymousRoutes.path } />
      : (
        <div className={ this.state.openMenu ? "g-sidenav-show g-sidenav-pinned" : "g-sidenav-hidden" }>
          { notifications && <Notifications notifications={notifications} />}

          <ModeratorSidebar toggle={ this.toggle } />

          <div className="main-content">
            <AdminNavbar userName={username} />
            <Switch>
              {
                Object.keys(moderatorRoutes.routes).map((routeName, i) =>
                  moderatorRoutes.routes[routeName].path &&
                  <AccessControl
                    role={ moderatorRoutes.role }
                    key={i}
                    path={ moderatorRoutes.path + moderatorRoutes.routes[routeName].path}
                    component={ moderatorRoutes.routes[routeName].component}
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

export default connect(mapStateToProps)(withTranslation()(ModeratorLayout))
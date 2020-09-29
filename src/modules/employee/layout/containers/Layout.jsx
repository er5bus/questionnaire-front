import React from "react";
import Notifications from 'react-notification-system-redux';
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
//import Sidebar from './../components/Sidebar'
import AccessControl from './../../../../components/AccessControl';
import anonymousRoutes from "./../../../../routes/anonymous";
import employeeRoutes from "./../../../../routes/employee";
import { isEmployee } from './../../../../utils/helpers';
import Navbar from "./../components/Navbar";





class EmployeeLayout extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      openMenu: true
    }
  }

  toggle = () => this.setState({ openMenu: !this.state.openMenu })

  render() {

    const { user: { username, role }, authenticated, notifications = null } = this.props

    return !authenticated || !isEmployee(role)
      ? <Redirect to={ anonymousRoutes.path } />
      : (
        <div className={ this.state.openMenu ? "g-sidenav-show g-sidenav-pinned" : "g-sidenav-hidden" }>
          { notifications && <Notifications notifications={notifications} />}

          <div className="main-content" style= {{
            paddingBottom: 80
          }}>
            <Navbar userName={username} />
            <Switch>
              {
                Object.keys(employeeRoutes.routes).map((routeName, i) =>
                  employeeRoutes.routes[routeName].path &&
                  <AccessControl
                    role={ employeeRoutes.role }
                    key={i}
                    path={ employeeRoutes.path + employeeRoutes.routes[routeName].path}
                    component={ employeeRoutes.routes[routeName].component}
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

export default connect(mapStateToProps)(EmployeeLayout)

import React from "react"
import { NavLink as NavLinkRRD } from "react-router-dom"

import moderatorRoutes from "./../../../routes/moderator"

import logo from './../../../assets/img/qa.svg'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap"


class Sidebar extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.activeRoute.bind(this)
    this.state = {
      collapseOpen: false
    }
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    })
  }

  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    })
  }

  render() {

    return (
      <Navbar
        className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
        expand="md"
      >
        <div className="scroll-wrapper scrollbar-inner">
          <div className="sidenav-header d-flex align-items-center">
            {/* Brand */}
            <NavbarBrand className="pt-4">
              <img src={logo} height="40" className="navbar-brand-img" alt="..." />
            </NavbarBrand>
            {/* Toggler */}
            <div className="ml-auto">
              <div className="sidenav-toggler d-none d-xl-block active" onClick={this.props.toggle}>
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Collapse */}
          <div  className="navbar-inner">
            <Collapse navbar isOpen={this.state.collapseOpen}>
              {/* Navigation */}
              <Nav navbar>
                <NavItem>
                  <NavLink
                    to={ moderatorRoutes.path + moderatorRoutes.routes.dashbord.path }
                    tag={NavLinkRRD}
                    onClick={this.closeCollapse}
                    activeClassName="active"
                  >
                    <i className="ni ni-shop" />
                    <span className="nav-link-text">Dashbord</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Sidebar

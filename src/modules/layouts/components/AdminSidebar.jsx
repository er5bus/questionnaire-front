import React from "react"
import { NavLink as NavLinkRRD } from "react-router-dom"
// nodejs library to set properties for components
import { PropTypes } from "prop-types"

import logo from './../../../assets/img/qa.svg'

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap"

class Sidebar extends React.PureComponent {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    })
  }

  // creates the links that appear in the left menu / Sidebar
  createLinks = () => {
    return this.props.routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={ prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            <span className="nav-link-text">{prop.name}</span>
          </NavLink>
        </NavItem>
      )
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
                { this.createLinks() }
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
}

export default Sidebar

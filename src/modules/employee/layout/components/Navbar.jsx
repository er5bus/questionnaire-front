import PropTypes from 'prop-types';
import React from "react";
import { Link } from "react-router-dom";
import { Container, DropdownItem, DropdownMenu, DropdownToggle, Media, Nav, Navbar, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import newLogo from './../../../../assets/img/newLogo.svg';
import userIcon from './../../../../assets/img/user.png';
import anonymousRoutes from './../../../../routes/anonymous';
import employeeRoutes from './../../../../routes/employee';


const LogoutModal = anonymousRoutes.routes.logout.component

const UserNavbar = ({ userName }) => {

  const [showModal, setShowModal] = React.useState(false)

  const onToggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <LogoutModal openModal={showModal} onToggle={onToggleModal} />
      <Navbar className="navbar navbar-top navbar-expand navbar-dark  navbarCustomStyle" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {" "}
          </Link>
          <Nav className="navbar-nav-hover align-items-lg-center" navbar>
            <NavItem>
              <NavLink replace to={employeeRoutes.path + employeeRoutes.routes.medicalRecord.path} tag={Link}>
                <div className="fixed-logo ">
                  <img src={newLogo} alt="..." className="icon-sm mr-1" />
                  <p>Predict Analyse</p>
                </div>

              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={userIcon}
                      className="icon-sm mr-1"
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold text-capitalize" style={{
                      color:"#0B2B5C"
                    }}>
                      {userName}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem disabled={true} to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>Mon compte</span>
                </DropdownItem>
                <DropdownItem disabled={true} to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Paramètres</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={onToggleModal}>
                  <i className="ni ni-user-run" />
                  <span>Se déconnecter</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>    </>
  )
}

UserNavbar.prototypes = {
  userName: PropTypes.string
}

export default UserNavbar

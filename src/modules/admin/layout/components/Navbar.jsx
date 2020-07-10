import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import anonymousRoutes from './../../../../routes/anonymous'

import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Navbar,
  Nav,
  Container,
} from "reactstrap"


import { useTranslation } from "react-i18next"

import userIcon from "./../../../../assets/img/user.png"

const LogoutModal = anonymousRoutes.routes.logout.component

const UserNavbar = ({ userName }) => {

  const { t } = useTranslation()

  const [ showModal, setShowModal ] = React.useState(false)

  const onToggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <LogoutModal openModal={ showModal } onToggle={onToggleModal} />
      <Navbar className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            { " " }
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
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
                    <span className="mb-0 text-sm font-weight-bold text-capitalize">
                      {userName}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem disabled={true} to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>{ t("Profile") }</span>
                </DropdownItem>
                <DropdownItem disabled={true} to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>{ t("Settings") }</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={onToggleModal}>
                  <i className="ni ni-user-run" />
                  <span>{ t("Logout") }</span>
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

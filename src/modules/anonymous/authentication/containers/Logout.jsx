import React from 'react'
import { connect } from 'react-redux'

import { logout } from './../actions'

import ConfirmModal from './../../../../components/ConfirmModal'


const Logout = ({ logout, openModal, onToggle }) => {

  return (
    <ConfirmModal
      isOpen={ openModal }
      title="Confirmation"
      content="Êtes-vous sûr de vouloir vous déconnecter ?"
      onToggle={onToggle}
      onClick={ logout }
      buttonText="Se déconnecter"
    />
  )
}

const mapStateToProps = state => state.auth

export default connect(mapStateToProps, { logout })(Logout)

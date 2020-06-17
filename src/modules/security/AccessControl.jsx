// Imports
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { hasRole } from './../../utils/helpers'
import ForbiddenPage from './../../components/ForbiddenPage'

// Component
const AccessControl = (props) =>{

  const { isAuthenticated, role, currentUser } = props

  const isGranted = () => {
    if (!isAuthenticated){
      return false
    }

    if (Array.isArray(role)){
      return role.some((value) => hasRole(currentUser.role, value) )
    }

    if (typeof role === 'string'){
      return hasRole(currentUser.role, role)
    }

    return false
  }

  return (
    <>
      { isGranted() ? props.children : <Route {...props} component={ForbiddenPage} /> }
    </>
  )
}

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps, {})(AccessControl)

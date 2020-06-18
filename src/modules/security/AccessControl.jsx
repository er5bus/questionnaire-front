// Imports
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { hasRole } from './../../utils/helpers'
import ForbiddenPage from './../../components/ForbiddenPage'

// Component
const AccessControl = (props) =>{

  const { authenticated, role, user, path, component } = props

  const isGranted = () => {
    if (!authenticated){
      return false
    }

    if (Array.isArray(role)){
      return role.some((value) => hasRole(user.role, value) )
    }

    if (!isNaN(role)){
      return hasRole(user.role, role)
    }

    return false
  }

  return <Route path={path} component={  isGranted() ? component  : ForbiddenPage} />
}

const mapStateToProps = (state) => state.session

export default connect(mapStateToProps)(AccessControl)

import React from 'react'

const Register = React.lazy( () =>  import("../../modules/anonymous/authentication/containers/Register"))
const Logout = React.lazy( () => import("../../modules/anonymous/authentication/containers/Logout"))
const Login = React.lazy( () => import("../../modules/anonymous/authentication/containers/Login"))


export const register = {
  path: "/register/:param",
  component: Register
}

export const login = {
  path: "/login",
  component: Login
}

export const logout = {
  component: Logout
}

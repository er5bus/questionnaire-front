import React from "react"

const UserList = React.lazy( () => import("../../modules/admin/user/containers/UserList"))
//const UserNew = React.lazy( () => import("../../modules/admin/user/containers/UserNew"))
//const UserEdit = React.lazy( () => import("../../modules/admin/user/containers/UserEdit"))


export const userList = {
  path: "/users",
  component: UserList,
}

/*export const userNew = {
  path: "/user/new",
  component: UserNew,
}

export const userEdit = {
  path: "/user/:param/edit",
  component: UserEdit,
}*/

import React from "react"
import { UsersContainerProps } from "../../types/types"
import Preloader from "../common/Preloader/Preloader"
import Users from "./Users"

const UsersContainer = ({ users, sorting }: UsersContainerProps) => {

   if (!users) {
      return <Preloader />
   }
   return <Users users={users} sorting={sorting}/>

}

export default UsersContainer


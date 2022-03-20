import React from "react"
import { UsersContainerProps } from "../../types/types"
import Preloader from "../common/Preloader/Preloader"
import Users from "./Users"

const UsersContainer = ({ users, sorting }: UsersContainerProps) => {

   if (!users) {
      return <Preloader />
   }

   if (sorting === 'city') {
      users = [...users.sort((a, b) => {
         if (a.address.city > b.address.city) return 1
         return -1
      })]
   } else {
      users = [...users.sort((a, b) => {
         if (a.company.name > b.company.name) return 1
         return -1
      })]
   }

   return <Users users={users}/>
}

export default UsersContainer


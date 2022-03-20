import React from "react";
import UserItem from "./UserItem";
import { TUsersProps } from "../../types/types";
import Title from "../common/Title/Title";
import './Users.scss'

const Users = ({ users, sorting }: TUsersProps) => {
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

   return (
      <div className="users_list_wrapper">
         <Title text="Список пользователей" />
         <ul className="users_list">
            {users.map(u => <li className="user_item_wrapper" key={u.id + u.name}>
                              <UserItem id={u.id} name={u.name} city={u.address.city} companyName={u.company.name} />
                           </li>)}
         </ul>
         <p className="users_list__summary">Найдено {users.length} пользователей</p>
      </div>
   )
}



export default Users
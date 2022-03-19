import React from "react";
import UserItem from "./UserItem";
import { TSorting, TUsers } from "./UsersContainer";
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
         <h1 className="users_main_title">Список пользователей</h1>
         <ul className="users_list">
            {users.map(u => <li className="user_item_wrapper" key={u.id + u.name}>
                              <UserItem name={u.name} city={u.address.city} companyName={u.company.name} />
                           </li>)}
         </ul>
      </div>
   )
}

type TUsersProps = {
   users: TUsers
   sorting: TSorting
}

export default Users
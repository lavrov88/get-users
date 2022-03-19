import React from "react"
import Users from "./Users"

const UsersContainer = ({ sorting }: UsersContainerProps) => {
   const [users, setUsers] = React.useState<TUsers | null>(null)

   React.useEffect(() => {
      fetchUsers()
   }, [])

   const fetchUsers = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let fetchedUsers = await response.json()
      setUsers(fetchedUsers)
   }

   if (!users) {
      return <div>Загрузка...</div> 
   }
   return <Users users={users} sorting={sorting}/>

}

export type TSorting = 'city' | 'company'
type UsersContainerProps = {
   sorting: TSorting
}
export type TUsers = TUserData[]
export type TUserData = {
   id: number
   name: string
   username: string
   email: string
   address: {
      street: string
      suite: string
      city: string
      zipcode: string
   }
   geo: {
      lat: string
      lng: string
   }
   phone: string
   website: string
   company: {
      name: string
      catchPhrase: string
      bs: string
   }
}

export default UsersContainer


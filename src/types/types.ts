// SORTING

export type TSorting = 'city' | 'company'
export type UsersContainerProps = {
   users: TUsers | null
   sorting: TSorting
}
export type SortMenuProps = {
   setSorting: React.Dispatch<React.SetStateAction<TSorting>>
}

// USERS 

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
export type TUsersProps = {
   users: TUsers
}

// USER ITEM

export type UserItemProps = {
   id: number
   name: string
   city: string
   companyName: string
}

// USER PAGE

export type UserPageContainerProps = {
   users: TUsers | null
}
export type UserPageProps = {
   userData: TUserPageData
}
export type TUserPageData = {
   name: string
   username: string
   email: string
   street: string
   city: string
   zipcode: string
   phone: string
   website: string
}

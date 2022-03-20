import React from "react";
import { useParams } from "react-router-dom";
import { UserPageContainerProps } from "../../types/types";
import Preloader from "../common/Preloader/Preloader";
import UserPage from "./UserPage";

const UserPageContainer = ({ users }: UserPageContainerProps) => {
   const userId = Number(useParams().userId)
   
   if (!users) {
      return <Preloader />
   }

   const user = users.filter(u => u.id === userId)[0]
   const userData = {
      name: user.name,
      username: user.username,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
      phone: user.phone,
      website: user.website
   }

   return <UserPage userData={userData} />
}

export default UserPageContainer
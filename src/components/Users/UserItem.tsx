import React from "react";
import './UserItem.scss'

const UserItem = ({ name, city, companyName }: UserItemProps) => {
   return (
      <div className="user_item">
         <ul className="user_item_data">
            <li className="user_item_data_line">
               <span className="user_item_data_line_name">ФИО:</span>
               <span className="user_item_data_line_data">{name}</span>
            </li>
            <li className="user_item_data_line">
               <span className="user_item_data_line_name">город:</span>
               <span className="user_item_data_line_data">{city}</span>
            </li>
            <li className="user_item_data_line">
               <span className="user_item_data_line_name">компания:</span>
               <span className="user_item_data_line_data">{companyName}</span>
            </li>
         </ul>
         <div className="user_item_more">
            <a href="www.ru" className="user_item_more_link">Подробнее</a>
         </div>
      </div>
   )
}

type UserItemProps = {
   name: string
   city: string
   companyName: string
}

export default UserItem
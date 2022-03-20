import React from "react";
import { Link } from "react-router-dom";
import { UserItemProps } from "../../types/types";
import './UserItem.scss'

const UserItem = ({ id, name, city, companyName }: UserItemProps) => {
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
            <Link to={'./users/' + id} className="user_item_more_link">Подробнее</Link>
         </div>
      </div>
   )
}

export default UserItem
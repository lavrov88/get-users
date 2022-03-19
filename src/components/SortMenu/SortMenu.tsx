import React from "react";
import { TSorting } from "../Users/UsersContainer";
import './SortMenu.scss'

const SortMenu = ({ setSorting }: SortMenuProps) => {
   return (
      <aside className='sidebar'>
         <nav className="sort_menu">
            <h3 className="sort_menu_title">Сортировка</h3>
            <ul className="sort_menu_items">
               <li>
                  <button onClick={() => setSorting('city')} className="sort_menu_item">по городу</button>
               </li>
               <li>
                  <button onClick={() => setSorting('company')} className="sort_menu_item">по компании</button>
               </li>
            </ul>
         </nav>
      </aside>
   )
}

type SortMenuProps = {
   setSorting: React.Dispatch<React.SetStateAction<TSorting>>
}

export default SortMenu
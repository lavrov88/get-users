import React from "react";
import { SortMenuProps } from "../../types/types";
import Button from "../common/Button/Button";
import './SortMenu.scss'

const SortMenu = ({ setSorting }: SortMenuProps) => {
   return (
      <aside className='sidebar'>
         <nav className="sort_menu">
            <h3 className="sort_menu_title">Сортировка</h3>
            <ul className="sort_menu_items">
               <li>
                  <Button 
                     clickHandler={() => setSorting('city')}
                     text="по городу"/>
               </li>
               <li>
                  <Button 
                     clickHandler={() => setSorting('company')}
                     text="по компании"/>
               </li>
            </ul>
         </nav>
      </aside>
   )
}


export default SortMenu
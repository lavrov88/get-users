import React from "react";
import './Title.scss'

const Title = ({ text }: { text: string }) => {
   return (
      <h1 className="users_main_title">{text}</h1>
   )
}

export default Title
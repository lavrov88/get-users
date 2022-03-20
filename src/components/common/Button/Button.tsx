import React from "react";
import './Button.scss'

const Button = ({ clickHandler, text, type }: ButtonProps) => {
   if (!type) type = ''

   return (
      <button onClick={clickHandler} className={`btn ${type}`}>{text}</button>
   )
}

type ButtonProps = {
   clickHandler: React.MouseEventHandler<HTMLButtonElement>
   type?: 'btn_submit' | ''
   text: string
}

export default Button
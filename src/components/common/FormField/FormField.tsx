import React, { ChangeEventHandler, FocusEventHandler } from "react";
import './FormField.scss'

export const FormFieldArea = ({disabled, labelName, laberFor, value, handleChange, handleBlur }: FormFieldAreaPropsType) => {
   return (
      <p>
         <label 
            htmlFor={laberFor}
            className="form_field__label"
         >{labelName}</label><br></br>
         <textarea
            className={"user_page_form_textarea"}
            name={laberFor}
            defaultValue={value}
            disabled={disabled}
            onChange={handleChange}
            onBlur={handleBlur}
         />
      </p>
   )
}

const FormField = ({disabled, labelName, laberFor, touched, errors, value, handleChange, handleBlur }: FormFieldPropsType) => {
   let errorClass = (touched && errors) ? " error" : ""

   return (
      <p>
         <label 
            htmlFor={laberFor}
            className="form_field__label"
         >{labelName}</label><br></br>
         <input
            className={"user_page_form_input" + errorClass}
            type="text"
            name={laberFor}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={value}
            disabled={disabled}
         />
      </p>
   )
}

type FormFieldPropsType = {
   disabled?: boolean
   labelName: string
   laberFor: string
   touched?: boolean
   errors?: string
   value?: string
   handleChange: ChangeEventHandler<HTMLInputElement>
   handleBlur: FocusEventHandler<HTMLInputElement>
}

type FormFieldAreaPropsType = {
   disabled?: boolean
   labelName: string
   laberFor: string
   value?: string
   handleChange: ChangeEventHandler<HTMLTextAreaElement>
   handleBlur: FocusEventHandler<HTMLTextAreaElement>
}

export default FormField
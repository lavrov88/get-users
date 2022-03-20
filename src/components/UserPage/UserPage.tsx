import { Form, Formik } from "formik";
import * as yup from 'yup'
import React from "react";
import { UserPageProps } from "../../types/types";
import Button from "../common/Button/Button";
import Title from "../common/Title/Title";
import './UserPage.scss'
import FormField, { FormFieldArea } from "../common/FormField/FormField";

const UserPage = ({ userData }: UserPageProps) => {
   const [editMode, setEditMode] = React.useState(false)

   const turnEditModeOn = () => {
      setEditMode(true)
   }

   const required = yup.string().required()
   const validationSchema = yup.object().shape({
      name: required,
      username: required,
      email: required,
      street: required,
      city: required,
      zipcode: required,
      phone: required,
      website: required,
   })

   return (
      <div className="user_page">
         <div className="user_page__header">
            <Title text="Профиль пользователя" />
            <Button clickHandler={turnEditModeOn} text="Редактировать" />
         </div>
         <div>
            <Formik
               initialValues={{
                  name: userData.name,
                  username: userData.username,
                  email: userData.email,
                  street: userData.street,
                  city: userData.city,
                  zipcode: userData.zipcode,
                  phone: userData.phone,
                  website: userData.website,
                  comment: ''
               }}
               validateOnBlur
               onSubmit={(values) => { console.log(JSON.stringify(values)) }}
               validationSchema={validationSchema}
            >
               {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                  <Form className="user_page_form">
                     <FormField 
                        disabled={!editMode}
                        labelName={"Name"}
                        laberFor={'name'}
                        touched={touched.name} 
                        errors={errors.name} 
                        value={values.name}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"User name"}
                        laberFor={'username'}
                        touched={touched.username} 
                        errors={errors.username} 
                        value={values.username}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"E-mail"}
                        laberFor={'email'}
                        touched={touched.email} 
                        errors={errors.email} 
                        value={values.email}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"Street"}
                        laberFor={'street'}
                        touched={touched.street} 
                        errors={errors.street} 
                        value={values.street}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"City"}
                        laberFor={'city'}
                        touched={touched.city} 
                        errors={errors.city} 
                        value={values.city}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"Zip code"}
                        laberFor={'zipcode'}
                        touched={touched.zipcode} 
                        errors={errors.zipcode} 
                        value={values.zipcode}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"Phone"}
                        laberFor={'phone'}
                        touched={touched.phone} 
                        errors={errors.phone} 
                        value={values.phone}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormField 
                        disabled={!editMode}
                        labelName={"Website"}
                        laberFor={'website'}
                        touched={touched.website} 
                        errors={errors.website} 
                        value={values.website}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <FormFieldArea
                        disabled={!editMode}
                        labelName={"Comment"}
                        laberFor={'comment'}
                        value={values.comment}
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                     />
                     <div className="user_page_form__footer">
                        <button
                           className="btn btn-submit"
                           disabled={ !editMode || (!isValid && dirty) }
                           type={"submit"}
                        >Отправить</button>
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   )
}

export default UserPage
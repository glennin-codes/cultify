import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore,newUser } from "../../hooks/UseAuthStore";
import { Formik, Form, Field, ErrorMessage, FieldInputProps, FieldMetaProps } from 'formik';
import * as Yup from 'yup';
import { Alert } from "@material-tailwind/react";

export const Signup = (): JSX.Element => {

const {signUp}=useAuthStore();
  
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('First Name is required'),
    lastName: Yup.string().trim().required('Last Name is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email').trim().required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').trim().required('Password is required'),
  });
  

  const handleSubmit =async (values:newUser) => {
  console.log({values})
  alert({values});
    await signUp(values)
  };
//hundlesubmit
interface MyFormValues {
  firstName: string;
}


  return (
    <div className="min-h-screen  flex items-center justify-center mt-0  space-y-0 bg-logins bg-no-repeat w-full bg-center bg-cover px-6 ">
      <div className=" flex flex-col shadow-md md:mt-32 md:mb-16 p-8 bg-white w-full max-w-md rounded-md ">
        <h1 className="text-center text-mainHeading text2xl md:text-3xl font-bold">
          Welcome to <span className="text-darkGreen">Cultify</span>
        </h1>
        <h1 className=" font-bold text-2xl md:text-3xl text-greenMain text-center">
          Signup
        </h1>
       
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
          } as newUser}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        
        >
         {( ) => (
            <Form
              className="flex flex-col space-y-2 text-sm md:text-base w-full mt-6"
            >
          <div className="flex  flex-col md:flex-row md:justify-between w-full md:space-x-2 space-y-2 md:space-y-0">
          <div className="md:w-1/2  w-full">
            <Field name="firstName">
            {({ field, meta}: { field: FieldInputProps<any>, meta: FieldMetaProps<any> , }) => (
              <>
              <label htmlFor="firstName" className="text-blackSubtitles mb-2 font-semibold block">
                First name
              </label>
              <input
               {...field}
               onBlur={field.onBlur}
                className={`w-full px-4 py-2 ${meta.error && meta.touched ? 'border-red-500': ''} border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
              />
              {meta.error && meta.touched &&(
                 <div className="text-sm text-red-500 " >
               {  meta.error}
                 </div>
              )}

              </>
            )}
            </Field>
            </div>
            <div className="md:w-1/2   ">
            <Field name="lastName">
              {({ field, meta}: { field: FieldInputProps<any>, meta: FieldMetaProps<any> , }) => (
             <>
              <label className="text-blackSubtitles mb-2  font-semibold block">
                Last Name
              </label>
              <input
                {...field}
                onBlur={field.onBlur}
                className={`w-full px-4 py-2 ${meta.error && meta.touched ? 'border-red-500': ''} border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
              />
               {meta.error && meta.touched &&(
                 <div className="text-sm text-red-500 " >
               {  meta.error}
                 </div>
              )}
             </>)}
              </Field>
            </div>
          </div>
          <div>
          <Field name="phoneNumber">
              {({ field, meta}: { field: FieldInputProps<any>, meta: FieldMetaProps<any> , }) => (
             <>
            <label
              htmlFor="phoneNumber"
              className="text-blackSubtitles font-semibold mb-2 block"
            >
              Enter your valid phone number
            </label>
            <input
               {...field}
              type="number"
             onBlur={field.onBlur}
              className={`w-full px-4 py-2 ${meta.error && meta.touched ? 'border-red-500': ''} border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
            />
            {meta.error && meta.touched &&(
                 <div className="text-sm text-red-500 " >
               {  meta.error}
                 </div>
              )}
            </>
            )}
           </Field>
          </div>
          <div>
          <Field name="email">
              {({ field, meta}: { field: FieldInputProps<any>, meta: FieldMetaProps<any> , }) => (
            <>
            <label
              htmlFor="email"
              className="text-blackSubtitles font-semibold mb-2 block"
            >
              Enter your email address
            </label>
            <input
              {...field}
              type="text"
             onBlur={field.onBlur}
              className={`w-full px-4 py-2 ${meta.error && meta.touched ? 'border-red-500': ''} border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
            />
             {meta.error && meta.touched &&(
                 <div className="text-sm text-red-500 " >
               {  meta.error}
                 </div>
              )}
            </>
              )}
            </Field>
          </div>
          <div>
          <Field name="password">
              {({ field, meta}: { field: FieldInputProps<any>, meta: FieldMetaProps<any> , }) => (
            <>
            <label
              htmlFor="password"
              className="text-blackSubtitles font-semibold mb-2 block"
            >
              Enter a password
            </label>

            <input
              {...field}
              type="password"
              className={`w-full px-4 py-2 ${meta.error && meta.touched ? 'border-red-500': ''} border rounded-md focus:outline-none focus:border-blue-600 border-slate-300 hover:border-slate-400`}
            />
              {meta.error && meta.touched &&(
                 <div className="text-sm text-red-500 " >
               {  meta.error}
                 </div>
              )}
            </>
              )}
              </Field>
          </div>
          <p className="flex justify-end py-2">
            Have an account ?{" "}
            <Link to="/login">
              <span className="text-darkGreen hover:text-green-500 focus:outline-none cursor-pointer">
                Login
              </span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full   rounded-md focus:outline-none focus:shadow-outline-blue-500 hover:bg-darkGreen text-white py-2 px-4 bg-greenMain text-center"
          >
            SignUp
          </button>
        </Form>
          )}
        </Formik>
      
      </div>
    </div>
  );
};

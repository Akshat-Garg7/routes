import React from 'react'
import frame from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";


export const template = ({title,desc1,desc2,image,formType,setisLoggedIn}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
        <div className="w-11/12 max-w-[450px] mx-0 text-white">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                <span className="text-white">{desc1}</span>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>
            {formType==="signup"?<SignupForm setisLoggedIn={setisLoggedIn} ></SignupForm>:<LoginForm setisLoggedIn={setisLoggedIn} ></LoginForm>}
            <div className="flex w-full items-center my-4 gap-x-2">
                <div  className="h-[1px] w-full bg-white"></div>
                <p  className="text-white font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-white"></div>
            </div>
            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">  <FcGoogle />Sign Up with Google</button>
        </div>
        <div className="relative w-11/12 max-w-[450px]">
        <img src={frame} alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "></img>
        
        <img src={image} alt="patter" width={558} height={504} loading="lazy" className="absolute top-4 right-4 "></img>

        </div>
    </div>
  )
}

export default template;
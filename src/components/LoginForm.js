import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = (props) => {
    const setisLoggedIn=props.setisLoggedIn;
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    });
    function changeHandler(event)
    {
        setFormData([(prev)=>[
        {
            ...prev,[event.target.name]:event.target.value,
        },
        ],
    ]);
    }
    
    function submitHandler(event)
    {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Login Successfully");
        navigate("/dashboard");
        console.log("login hogaya");
    }
  return (
    <form
        onSubmit={submitHandler}
        
        className="flex flex-col w-full gap-y-4 mt-6">
        
        <label className="w-full">
            <p  className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email Address <sup>*</sup></p>
            <input placeholder="Enter your email address" required type='email' name='email' value={formData.email} onChange={changeHandler}
            className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"></input>
        </label>

        <label className="w-full relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Password <sup>*</sup></p>
            <input placeholder="Enter your Password" className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"  required type={showPassword?"text":"password"} name='password' value={formData.password} onChange={changeHandler}></input>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
        </label>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">Sign In</button>
    </form>
  );
}

export default LoginForm;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
// import { toast } from 'react-toastify';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

export const SignupForm = (props) => {
    const setisLoggedIn=props.setisLoggedIn;
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");
    function changeHandler(event) {
        setFormData([
            (prev) => [
            {
                ...prev,
                [event.target.name]: event.target.value,
            },
            ],
        ]);
        }

    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }
        else{
        setisLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
        }
    }
  return (
    <div >
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onclick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-black text-white"
              : "bg-transparent text-white "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onclick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-black text-white"
              : "bg-transparent text-white "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className="flex  gap-x-4">
                <label  className="w-full">
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                    <input required placeholder="Enter First Name" name="firstName" type='text' value={formData.firstName} onChange={changeHandler}
                     className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                </label>
                <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                    <input required placeholder="Enter Last Name" name="lastName" type="text" value={formData.lastName} onChange={changeHandler}
                    className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    ></input>
                </label>
            </div>
                <label htmlFor="" className="w-full">
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Email Address</p>
                    <input required placeholder="Enter your Email address" name="email" type="email" value={formData.email} onChange={changeHandler}
                    className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>
                </label>
                <div className="flex gap-x-4">
                <label htmlFor="" className="w-full relative">
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">Create Password</p>
                    <input required placeholder="Enter Password" name="password" type={showCreatePass?"text":"password"} value={formData.password} onChange={changeHandler}
                    className="bg-black rounded-[0.75rem] w-full p-[12px] text-richblack-5"></input>

                    <span
                        onClick={() => setShowCreatePass(!showCreatePass)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10"
                        >
                        {showCreatePass ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
                <label htmlFor="" className="w-full relative" >
                    <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Confirm Password
                    <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                    type={showConfirmPass ? "text" : "password"}
                    required
                    placeholder="Confirm Password"
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    className="bg-black rounded-[0.75rem] w-full p-[12px] text-white"
                    />

                    <span
                        onClick={() => setShowConfirmPass(!showConfirmPass)}
                        className="absolute right-1 top-[38px] cursor-pointer z-10"
                        >
                        {showConfirmPass ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                </label>
            
            </div>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">Create Account</button>
        </form>
    </div>
  );
}
export default SignupForm;

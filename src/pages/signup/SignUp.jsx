import React, { useState } from 'react'
import Form from '../../common/Form'
import { useNavigate } from "react-router"
import { themeStore } from '../../common/Store'
import {useStore} from 'zustand'
const SignUp = () => {
    const{addAccesToken}=useStore(themeStore)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const signup = async()=>{
        try{
            const response = await fetch("https://localhost:5001/api/v1/auth/signup",{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData)
            }) 
            const data = await response.json()
            if(response.ok){
                addAccesToken(data.token)

            }
        }catch(error){
            console.error(error)
        }
    }
    const formItems = [
        {
            name: "username",
            label: "",
            type: "text",
            placeholder: "Username",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },
        {
            name: "email",
            label: "",
            type: "email",
            placeholder: "Email or mobile number",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },
        {
            name: "password",
            label: "",
            type: "password",
            placeholder: "Password",
            inputStyle: "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white"
        },

    ]

    const formButtons = [
        {
            title: "Sign Up",
            style: "bg-[#E50914] text-white font-medium py-3 rounded-[4px] w-full",
            action: signup
        },
        {
            title: "Already have an account? Sign In",
            style: "text-zinc-300 mt-[25px] w-full",
            action: () => {
                navigate("/login")
            }
        },
        {
            title: "",
            style: "text-red-600",
            action: () => { }
        },
    ]

    return (
        <div className=" relative max-w-[1440px] mx-auto max-h-[740px] w-full h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')] bg-black/50 bg-blend-overlay ">
            <img className=" absolute top-[24px] left-[168px] w-[150px]" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <Form
                headerText={
                    {
                        title: "Sign Up",
                        style: "text-white font-bold text-[32px]"
                    }
                }
                formItems={formItems}
                formButtons={formButtons}
                setFormData={setFormData}
                formStyle="w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px] " />

        </div>

    )
}

export default SignUp
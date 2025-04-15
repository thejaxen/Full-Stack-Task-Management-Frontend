import { Button, TextField } from "@mui/material";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login} from "../../reduxtoolkit/AuthSlice";


const SignIn = ({togglePanel}) => {

        const dispatch=useDispatch()

        const [formData,setFormData]=useState({
            email:"",
            password:"",
        })

        const handleChange=(e)=>{
            const {name,value}=e.target;
            setFormData({...formData,[name]:value})
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(login(formData))
            console.log("login form",formData)
        }
    return (
        <div>
            <h1 className="text-lg font-bold text-center pb-8 text">
                Login
            </h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email...'
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password...'
                />
                <div>
                    <Button
                        fullWidth
                        className="customButton input-field"
                        type="submit"
                        sx={{padding:".9rem"}}>
                        Login
                    </Button>
                </div>
            </form>
            <div className="mt-5 flex items-center gap-2 py-5 justify-center">
                <span>Do not you have an account?</span>
                <Button onClick={togglePanel}>Sign up</Button>
            </div>
        </div>
    )
}
export default SignIn;

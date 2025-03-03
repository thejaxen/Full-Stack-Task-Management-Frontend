import { Button, TextField } from "@mui/material";
import React, { useState } from 'react';

const SignIn = () => {
        const [formData,setFormData]=useState({
            email:"",
            password:""
        })

        const handleChange=(e)=>{
            const {name,value}=e.target;
            setFormData({...formData,[name]:value})
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("login form",formData)
        }
    return (
        <div>
            <h1 className="text-lg font-bold text-center pb-8 text">
                Login
            </h1>
            <form onSubmit={handleSubmit}>
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
                        className="customButton"
                        type="submit"
                        sx={{padding:".9rem"}}>
                        Login
                    </Button>
                </div>
            </form>
            <div>
                <span>Already have an account?</span>
            </div>
        </div>
    )
}
export default SignIn;

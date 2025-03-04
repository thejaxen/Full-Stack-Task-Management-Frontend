import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Button} from "@mui/material";

const SignUp = ({togglePanel}) => {

    const [formData,setFormData]=useState({
        email:"",
        full_name:"",
        password:"",
        role:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("sign up form",formData)
    }


    return (
        <div>
            <h1 className="text-lg font-bold text-center pb-8 text">
                Sign Up
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
                    label="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name..."
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        label="Role"
                        name="role"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_USER"}>USER</MenuItem>
                        <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
                    </Select>
                </FormControl>
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
                        Register
                    </Button>
                </div>
            </form>
            <div className="mt-5 flex items-center gap-1 py-5 justify-center">
                <span>Already have an account?</span>
                <Button onClick={togglePanel}>Login</Button>
            </div>
        </div>
    )
}
export default SignUp;

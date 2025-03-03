import React, { useState } from 'react';
import Logo from "./../../logo.svg";
import "./Auth.css";
import SignIn from "./SignIn";


const Auth = () => {
        const [isRegister,setIsRegister]=useState(false);
        const togglePanel=()=>{
            setIsRegister(!isRegister);
        };
    return(
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src={Logo} alt="Logo"/>
                        <div className='text'>
                            <span className='text-1'>Is risk worth taking?</span>
                            <span className='text-2 text-xs'>Lets get safe</span>
                        </div>
                    </div>
                    <div className='back'>
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <div className="forms h-full">
                    <div className="form-content h-full">
                        <div className="login-form">
                            <SignIn/>
                        </div>
                        <div className="signup-form">
                            signup form
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "./reduxtoolkit/TaskSlice";
import {getUserProfile} from "./reduxtoolkit/AuthSlice";


function App() {
    const user=true;
    const dispatch=useDispatch();
    const {task,auth}=useSelector(
        store=>store)

    useEffect(()=>{
        dispatch(fetchTasks({}));
        dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
    },[auth.jwt]);


  return (
    <ThemeProvider theme={darkTheme}>

        {auth.user? <div>
            <Navbar/>
            <Home/>
        </div>: <Auth/>}

    </ThemeProvider>
  );
}

export default App;

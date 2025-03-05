import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";
import {useState} from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
    const user=true;
  return (
    <ThemeProvider theme={darkTheme}>

        {user? <div>
            <Navbar/>
            <Home/>
        </div>: <Auth/>}


    </ThemeProvider>
  );
}

export default App;

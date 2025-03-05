import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        {/*<Navbar/>*/}
        {/*<Home/>*/}
        <Auth/>
    </ThemeProvider>
  );
}

export default App;

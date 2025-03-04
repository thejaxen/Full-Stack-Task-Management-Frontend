import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/home/Home";
import Auth from "./page/auth/Auth";


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

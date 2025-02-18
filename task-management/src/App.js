import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";
import Home from "./page/home/Home";



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;

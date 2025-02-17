import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darktheme";
import Navbar from "./page/navbar/Navbar";



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;

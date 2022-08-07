import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import NavigationBar from "./components/NavigationBar";

function App() {
  const theme = useTheme();

  console.log(theme);

  return (
    <Grid
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "black"
      }}
    >
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          {/* <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;

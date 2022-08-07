import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import ResumePage from "./pages/Resume";
import ContactsBar from "./components/ContactsBar";
import PagesBar from "./components/PagesBar";

function App() {
  const theme = useTheme();

  console.log(theme);

  return (
    <Grid
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <ContactsBar />
      <PagesBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;

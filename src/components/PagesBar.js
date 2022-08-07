import {
  Stack,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
  Tooltip,
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Button,
  Link,
} from "@mui/material";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";

export default function PagesBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "transparent", boxShadow:0 }}>
      <Toolbar sx={{ color: "white" }}>
        <Typography sx={{ flexGrow: 1 }}>
          <a href="/">
            <Typography variant="h4" sx={{ color: "white" }}>
              K
            </Typography>
          </a>
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="baseline"
          spacing={5}
          sx={{ padding: 2.5 }}
        >
          {/* <a href="experience">
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Experience
            </Typography>
          </a> */}
          <a href="/">
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              About
            </Typography>
          </a>
          <a href="/projects">
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Projects
            </Typography>
          </a>
          <a href="/resume">
            <Button variant="outlined">
              <Typography variant="subtitle1" sx={{ color: "white" }}>
                Resume
              </Typography>
            </Button>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

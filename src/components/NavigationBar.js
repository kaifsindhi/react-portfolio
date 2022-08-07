import {
  Stack,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";

export default function NavigationBar() {
  return (
    <Stack sx={{ padding: 5 }} spacing={2.5}>
      <a href="https://github.com/kaifsindhi">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/kaifsindhi">
        <LinkedInIcon />
      </a>
      <a href="mailto:mkaifsindhi@gmail.com">
        <EmailIcon />
      </a>
    </Stack>
  );
}

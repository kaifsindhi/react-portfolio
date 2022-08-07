import {
  Stack,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
  Grid,
  Tooltip,
} from "@mui/material";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";

export default function ContactsBar() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="baseline"
      spacing={2.5}
      sx={{ padding: 2.5 }}
    >
      <Tooltip title="GitHub" placement="right">
        <a href="https://github.com/kaifsindhi?tab=repositories">
          <GitHubIcon />
        </a>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="right">
        <a href="https://www.linkedin.com/in/kaifsindhi">
          <LinkedInIcon />
        </a>
      </Tooltip>
      <Tooltip title="Email" placement="right">
        <a href="mailto:mkaifsindhi@gmail.com">
          <EmailIcon />
        </a>
      </Tooltip>
    </Stack>
  );
}

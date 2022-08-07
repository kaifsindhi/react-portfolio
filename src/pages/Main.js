import { Typography, Grid, Container } from "@mui/material";

export default function MainPage() {
  return (
    <Grid sx={{ width: "100%", color: "white", padding: 10}}>
        <Typography variant="h4">Hi. My name is</Typography>
        <Typography variant="h1">Kaif Sindhi.</Typography>
        <Typography variant="h5" sx={{maxWidth: "41%"}}>I am a software engineering student at MSOE and am expected to graduate in May 2023.</Typography>
    </Grid>
  );
}

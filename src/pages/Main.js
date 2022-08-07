import { Typography, Grid, Container } from "@mui/material";

export default function Page() {
  return (
    <Grid container sx={{ color: "white", padding: 10}}>
      <Grid item>
        <Typography variant="h3">Hi. My name is</Typography>
        <Typography variant="h1">Kaif Sindhi.</Typography>
        <Typography variant="h5" sx={{ maxWidth: "60%" }}>
          I am a software engineering student at MSOE and am expected to
          graduate in May 2023.
        </Typography>
      </Grid>
    </Grid>
  );
}

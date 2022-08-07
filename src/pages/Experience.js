import { Typography, Grid, Container } from "@mui/material";

export default function Page() {
  return (
    <Grid container sx={{ color: "white", padding: 10 }}>
      <Grid item>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
          }}
        >
          Experience
        </Typography>
        <br />
      </Grid>
    </Grid>
  );
}

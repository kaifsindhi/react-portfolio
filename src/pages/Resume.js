import { Typography, Grid, Stack } from "@mui/material";
import Resume from "../static/resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function ResumePage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ color: "white", padding: 10 }}
    >
      <Document file={Resume}>
        <Page width="900" pageNumber={1}></Page>
      </Document>
    </Grid>
  );
}

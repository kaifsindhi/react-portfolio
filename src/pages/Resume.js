import { Typography, Grid, Stack } from "@mui/material";
import Resume from "../static/resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function ResumePage() {
  return (
    <Grid container sx={{ color: "white", padding: 10 }}>
      <Document file={Resume}>
        <Page height="800" pageNumber={1}></Page>
      </Document>
    </Grid>
  );
}

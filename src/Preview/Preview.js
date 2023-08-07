import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { RequirementFormContext } from "../context/RequirementFormContext";

const Preview = () => {
  const { data } = useContext(RequirementFormContext);
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={6} sm={6}>نام و نام خانوادگی : </Grid>
      <Grid item xs={6} sm={6}>{data.name}</Grid>
      <Grid item xs={6} sm={6}>اطلاعات تماس : </Grid>
      <Grid item xs={6} sm={6}>{data.contactInfo}</Grid>
      <Grid item xs={6} sm={6}>شهر یا کشور : </Grid>
      <Grid item xs={6} sm={6}>{data.city}</Grid>
      <Grid item xs={6} sm={6}>نیازمندی : </Grid>
      <Grid item xs={6} sm={6}>{data.requirement}</Grid>
    </Grid>
  );
};

export default Preview;

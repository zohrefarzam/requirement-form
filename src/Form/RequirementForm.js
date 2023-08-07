import { Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { RequirementFormContext } from "../context/RequirementFormContext";
import CustomTextArea from "./CustomTextArea";

const RequirementForm = () => {
  const { onChangeData, data } = useContext(RequirementFormContext);
  const [value, setValue] = useState("");
  return (
    <div>
      <React.Fragment>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              error={data.errorName}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  name: e.target.value,
                })
              }
              color="success"
              required
              id="firstName"
              name="firstName"
              label="نام و نام خانوادکی"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={data.errorContact}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  contactInfo: e.target.value,
                })
              }
              color="success"
              required
              id="contactInfo"
              name="contactInfo"
              label="شماره تماس / ایمیل"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) =>
                onChangeData({
                  ...data,
                  city: e.target.value,
                })
              }
              color="success"
              id="city"
              name="city"
              label="شهر / کشور"
              fullWidth
              autoComplete="shipping postal-code"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) =>
                onChangeData({
                  ...data,
                  requirement: e.target.value,
                })
              }
              color="success"
              id="city"
              name="city"
              label="نیازمندی"
              fullWidth
              autoComplete="shipping postal-code"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default RequirementForm;

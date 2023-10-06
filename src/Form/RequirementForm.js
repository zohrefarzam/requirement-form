import { Grid, TextField } from "@mui/material";
import { RequirementFormContext } from "../context/RequirementFormContext";
import React,{ useContext } from "react";

const RequirementForm = () => {
  const { onChangeData, data } = useContext(RequirementFormContext);

  return (
    <div>
      <React.Fragment>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              error={!!data.errorName}
              helperText={data.errorName}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  name: e.target.value,
                  errorName: "",
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
              error={!!data.errorContact}
              helperText={data.errorContact}
              onChange={(e) =>
                onChangeData({
                  ...data,
                  contactChannel: e.target.value,
                })
              }
              color="success"
              id="contactChannel"
              name="contactChannel"
              required
              label="شماره تماس / ایمیل"
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
                  address: e.target.value,
                  errorContact: "",
                })
              }
              color="success"
              id="address"
              name="address"
              label="آدرس"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              onChange={(e) =>
                onChangeData({
                  ...data,
                  description: e.target.value,
                })
              }
              color="success"
              id="description"
              name="description"
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

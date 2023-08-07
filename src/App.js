import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import RequirementForm from "./Form/RequirementForm";
import MuiRtl from "./MuiRtl";
import CustomStepper from "./Stepper/CustomStepper";
import { colorPallete } from "./constants/color";
import RequirementFormContextProvider, {
  RequirementFormContext,
} from "./context/RequirementFormContext";
import Preview from "./Preview/Preview";

const steps = ["توضیحات", "ثبت نیازمندی", "پیش نمایش درخواست"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div></div>;
    case 1:
      return <RequirementForm />;
    case 2:
      return <Preview />;
    default:
      throw new Error("Unknown step");
  }
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { data, onChangeData } = useContext(RequirementFormContext);

  const handleNext = () => {
    if (activeStep === 1) {
      // if(!data.name){
      //   onChangeData({
      //     ...data,
      //     errorName:"لطفا نام و نام خانوادگی را وارد کنید"
      //   })
      // }
      // if(!data.contactInfo){
      //   onChangeData({
      //     ...data,
      //     error:"لطفا شماره تماس یا ایمیل خود را وارد کنید"
      //   })
      // }
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <RequirementFormContextProvider>
      <MuiRtl>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              سلام
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: 3 }}
          >
            <CustomStepper steps={steps} activeStep={activeStep} />

            {activeStep === steps.length ? (
              <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems:'center',height:'200px' }}>
                  {" "}
                  نیازمندی شما با موفقیت ثبت شد
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{
                        mt: 3,
                        ml: 1,
                        color: colorPallete.green,
                        ":hover": {
                          background: colorPallete.green + "20",
                        },
                      }}
                    >
                      بازگشت
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      background: colorPallete.green,
                      color: "white",
                      ":hover": {
                        background: colorPallete.green + "80",
                      },
                    }}
                  >
                    {activeStep === steps.length - 1 ? "قبلی" : "بعدی"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
        </Container>
      </MuiRtl>
    </RequirementFormContextProvider>
  );
}

export default App;

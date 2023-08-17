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
import logo from './assets/images/logo.png';
const steps = [
  "توضیحات",
  "انواع نیازمندی",
  "مراحل ثبت درخواست",
  "ثبت نیازمندی",
  "پیش نمایش درخواست",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Box sx={{ mt: 3 }}>
          دور از وطن و خانواده بودن محدودیت ها و سختی های خاص خودش رو داره
          طبیعتا همه ی آدمایی که خارج از کشور زندگی میکنن یک سری نیازمندی و
          درخواست دارن که دوست دارن سرویس و یا شرکتی باشه تا برای اونها این کار
          رو انجام بده داستان شکل گیری اکوهلپ هم به خاطر برطرف کردن نیازمندی های
          ایرانیان خارج از کشور شکل گرفته هر نوع نیازی که شما دارین رو بررسی
          میکنیم و واستون انجامش میدیم.....
        </Box>
      );
    case 1:
      return (
        <Box sx={{ mt: 3 }}>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            این نیاز شما میتونه از هر نوعی باشه:
          </p>
          <ul style={{ listStyle: "inherit" }}>
            <li>
              خرید کادو برای خانواده و دوستانتون و تحویل به اونها گرفته باشه{" "}
            </li>
            <li>انجام امور اداری توی هر سازمانی</li>
            <li>خرید یه دوره و کورس اینترنتی</li>
            <li>پرداخت وام های شما در داخل کشور</li>
          </ul>
          و هرچیز دیگه ای که ای کاش ایران بودین تا خودتون انجامش میدادین
        </Box>
      );
    case 2:
      return (
        <Box sx={{ mt: 3 }}>
          <p style={{ fontWeight: "bold" }}>
            {" "}
            مراحل ثبت درخواست و نیازمندی تون هم ساده هستش:
          </p>
          <ol style={{ listStyle: "inherit" }}>
            <li>درخواست خودتون رو در گام های بعدی (هر چیزی که هست) ثبت کنین</li>
            <li>ما باهاتون تماس میگیریم و درخواستتون رو انجام میدیم.</li>
            <li>بعد از انجام درخواست مرحله ی پرداخت از سمت شما صورت میگیره</li>
            <li>پرداخت شما هم میتونه ارزی باشه و هم ریالی</li>
          </ol>
        </Box>
      );
    case 3:
      return <RequirementForm />;
    case 4:
      return <Preview />;
    default:
      throw new Error("Unknown step");
  }
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { data, onChangeData } = useContext(RequirementFormContext);

  const handleNext = () => {
    if (activeStep === 3) {
      if (!data.name) {
        onChangeData({
          ...data,
          errorName: "لطفا نام و نام خانوادگی را وارد کنید",
        });
        return;
      }
      if (!data.contactInfo) {
        onChangeData({
          ...data,
          errorContact: "لطفا شماره تماس یا ایمیل خود را وارد کنید",
        });
        return;
      }
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
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
          <img src={logo} height={80} width={80} />
          {/* <Typography variant="h6" color="inherit" noWrap>
            سلام
          </Typography> */}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
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
  );
}

export default App;

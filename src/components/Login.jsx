import {
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  createTheme,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import img from "../assets/shee.jpg";
import React from "react";

const MainLoginDiv = styled("div")(({ theme }) => ({
  padding: 0,
  position: "relative",
  height: "calc(100vh - 100px)",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url("${img}")`,
  backgroundSize: "cover",
  "@media (max-width: 650px)": {
    flexDirection: "column",
    height: "calc(100vh - 120px)",
  },
}));

const Login = () => {
  const theme = createTheme();
  const { primary, secondary, success, warning } = theme.palette;
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <MainLoginDiv>
      <Box
        sx={{
          padding: 5,
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          border: "3px solid",
          borderRadius: 2,
          borderTopColor: primary.main,
          borderBottomColor: secondary.main,
          borderLeftColor: success.main,
          borderRightColor: warning.main,
          backdropFilter: "blur(4px)",
          "@media (max-width: 650px)": {
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <Typography variant="h2" gutterbutton={true}>
          Login
        </Typography>
        <Box>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="#">Forget Password</Link>
          <Button variant="contained">LOG IN!</Button>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ justifyContent: "space-evenly" }}
        >
          Login With Google
          <Google />
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ justifyContent: "space-evenly" }}
        >
          Login With Facebook
          <Facebook />
        </Button>
        <Typography variant="body2">All Rights Reserved. &copy;</Typography>
      </Box>
    </MainLoginDiv>
  );
};

export default Login;

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LoginImage from "../Images/login.jpg";
import Lottie from "lottie-react";
import Laptop from "../Animations/laptop.json";
import { useState } from "react";

const MaterialUI = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "email") setEmail(value);
    else setPassword(value);
  };
  const submit=()=>{
    console.log(Email +" "+Password)
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": {
              m: 1,
              padding: 6,
            },
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Paper
            elevation={3}
            sx={{ width: "80%", backgroundColor: "rgba(245, 245, 245, 0.7)" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingBottom: 20,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Login
              </div>
              <TextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                name="email"
                onChange={handleChange}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ alignSelf: "flex-start" }}
              />
              <Button onClick={submit} variant="contained" sx={{ width: "100%", mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Box>
          </Paper>
        </Box>
        <style>
          {`
            @media screen and (max-width: 600px) {
              .lottie-animation {
                display: none;
              }
            }
          `}
        </style>
        <Lottie
          className="lottie-animation"
          animationData={Laptop}
          speed={1.5}
          loop={true}
          autoplay={true}
          style={{ width: 300, height: 300, marginLeft: 100 }}
        />
      </Box>
    </div>
  );
};

export default MaterialUI;

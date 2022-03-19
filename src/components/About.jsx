import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        backgroundImage:
          'url("https://source.unsplash.com/1920x1080/?colours,colourful")',
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media(max-width:650px)": {
          height: "125vh",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          minHeight: "50vh",
          minWidth: "50vh",
          borderRadius: "50%",
          backgroundImage: 'url("//unsplash.it/600/600")',
          m: "0px 150px 0px 100px",
          "@media(max-width:650px)": {
            mt: 2,
            m: 3,
          },
        }}
      ></Box>
      <Box
        sx={{
          m: "0px 10px 0px 10px",
          p: "50px 100px 50px 100px",
          borderRadius: "25px",
          backdropFilter: "blur(7px)",
          "@media(max-width:650px)": {
            p: "0px 10px 0px 10px",
          },
        }}
      >
        <Typography variant="h3">About Us</Typography>
        Try Our servcies at your doorstep, at cheapest price, while getting best
        service persons out there! Go on give us a try, without trying you can't
        judge, we are here to serve you! we are here for you to give you the
        best of best!
        <Typography sx={{ m: 3 }}>
          Its our honour you're reading and picking us to provide you services
          without trying you can't judge, we are here to serve you!
        </Typography>
      </Box>
    </Box>
  );
};

export default About;

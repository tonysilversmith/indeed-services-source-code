import { styled, Typography, Box } from "@mui/material";
import React from "react";

const MainHomeDiv = styled("div")(({ theme }) => ({
  padding: 0,
  position: "relative",
  height: "calc(150vh)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    'url("https://source.unsplash.com/1920x1080/?beach,farm,joy")',
  backgroundSize: "cover",
  "@media (max-width: 650px)": {
    height: "150vh",
  },
}));

const Home = () => {
  return (
    <MainHomeDiv>
      <Box
        sx={{
          width: "50%",
          "@media(max-width:650px)": {
            width: "85%",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Welcome to the most relible source of servicemen
        </Typography>
        <Typography variant="h2"></Typography>
      </Box>
      <Box>
        <Typography
          variant="h2"
          sx={{
            marginTop: "300px",
            "@media(max-width:650)": {
              fontSize: "20px",
            },
          }}
        >
          Try a new cheaper experience
        </Typography>
        <Typography variant="body1"></Typography>
      </Box>
    </MainHomeDiv>
  );
};

export default Home;

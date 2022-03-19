import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const Contact = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        backgroundImage: 'url("//unsplash.it/1920/1080")',
        backgroundSize: "cover",
        width: "100%",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">Contact Us at..</Typography>
      <Button
        variant="contained"
        href={`https://wa.me/+918808336678/?text=Hello+there!+I+require+a+service."`}
        sx={{ backgroundColor: "green", width: "250px" }}
      >
        <WhatsAppIcon sx={{ m: 1 }} /> WhatsApp
      </Button>
      <Button
        href="https://instagram.com/triv.tony"
        variant="contained"
        sx={{ backgroundColor: "#8a3ab9", width: "250px" }}
      >
        <InstagramIcon sx={{ m: 1 }} />
        Instagram
      </Button>
      <Button
        href="https://facebook.com/skullcrusher.cxx"
        variant="contained"
        sx={{ width: "250px" }}
      >
        <FacebookRoundedIcon sx={{ m: 1 }} />
        Facebook
      </Button>
      <Button
        href="https://www.linkedin.com/in/tanay-trivedi/"
        variant="contained"
        sx={{ backgroundColor: "#1a9b00", width: "250px" }}
      >
        <LinkedInIcon sx={{ m: 1 }} />
        LinkedIn
      </Button>
      <Button
        href="https://github.com/tonysilversmith"
        variant="contained"
        sx={{ backgroundColor: "#777", width: "250px" }}
      >
        <GitHubIcon sx={{ m: 1 }} />
        GitHub
      </Button>
      <Button
        href="https://t.me/KRAKENHUNTER"
        variant="contained"
        sx={{
          backgroundColor: "#000",
          width: "250px",
        }}
      >
        <TelegramIcon sx={{ m: 1 }} />
        Telegram
      </Button>
    </Box>
  );
};

export default Contact;

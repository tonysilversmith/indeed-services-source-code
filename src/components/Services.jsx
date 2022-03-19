import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import data from "../data/data";
import { TextField } from "@mui/material";

function MediaCard(props) {
  const [open, setOpen] = React.useState(false);
  const [remarks, setRemarks] = React.useState("No Remarks :)");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        aria-labelledby="Service-Card"
        aria-describedby="Service-Card"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              height: 500,
              width: 500,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "1px solid #777",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              "@media(max-width: 650px)": {
                height: 550,
                width: 250,
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${props.img}`}
              alt="IMAGE"
              sx={{
                p: "20px auto",
              }}
            />
            <Box
              sx={{
                p: "22% 0px 13% 0px",
                "@media(max-width: 650)": {
                  p: "30% 0px 15% 0px",
                },
              }}
            >
              <Typography id="Service-Card" variant="h6" component="h2">
                {props.name}
              </Typography>
              <Typography id="Service-Card" sx={{ mt: 2 }}>
                {props.title}
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="Remarks"
                multiline
                placeholder="Remarks : [Ex. I want to add some custom remarks.]"
                rows={1}
                fullWidth={true}
                onChange={(event) => {
                  setRemarks(event.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ alignItems: "center", justifyContent: "center" }}
                href={`https://wa.me/+918808336678/?text=Hello+there+I+want+to+register+myself+as+a+${props.name}.`}
              >
                Register
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ marginLeft: 5 }}
                href={`https://wa.me/+918808336678/?text=Hello+there+I+require+a+${props.name}.\n\nCustom+Remarks:+${remarks}`}
              >
                <WhatsAppIcon /> +91 8808336678
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Card
        sx={{
          maxWidth: 345,
          m: 5,
          transition: "transform .2s",
          "&:hover": {
            transform: "scale(1.25)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={`${props.img}`}
          //image={`//unsplash.it/${props.height}/${props.width}`}
          alt="IMAGE"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              handleOpen();
            }}
          >
            Register as Service Provider
          </Button>
          <Button
            size="small"
            onClick={() => {
              handleOpen();
            }}
          >
            Book Person
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

// let data;
//API call..
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     data = json;
//   });

const Services = () => {
  return (
    <>
      <Typography variant="h2">
        Contact our best services at your doorstep
      </Typography>
      {/* {console.log(pics)} */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
          justifyContent: "center",
          gap: "1 rem",
          "@media(max-width: 650px)": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {data.map((element) => {
          return (
            <MediaCard
              key={element.id}
              name={element.name}
              // title={element.company.catchPhrase}
              title={element.desc}
              img={element.img}
              height={Math.floor(Math.random() * 1000 + 400)}
              width={Math.floor(Math.random() * 1000 + 400)}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Services;

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const cateogry = [
  {
    id: "1",
    name: "Skilled Labour",
  },
  {
    id: "2",
    name: "Unskilled Labour",
  },
  {
    id: "3",
    name: "Doctors",
  },
  {
    id: "4",
    name: "Electricians",
  },
  {
    id: "5",
    name: "Painter",
  },
  {
    id: "6",
    name: "Salon/ Beauty Parlour",
  },
  {
    id: "7",
    name: "Catering Services",
  },
  {
    id: "8",
    name: "Education",
  },
  {
    id: "9",
    name: "Appliances Repair Services",
  },
  {
    id: "10",
    name: "Health Care Services",
  },
];
const ServiceCat = (props) => {
  return (
    <>
      {cateogry.map((ele) => {
        return (
          <Card sx={{ maxWidth: 345, m: 5 }} key={ele.id}>
            <CardMedia
              component="img"
              height="140"
              image={`//unsplash.it/300/300`}
              alt="IMAGE"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.id}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {}}>
                Have a Try
              </Button>
              <Button size="small" onClick={() => {}}>
                Book Person
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
export default ServiceCat;

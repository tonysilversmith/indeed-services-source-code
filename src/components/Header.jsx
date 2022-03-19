import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LoginIcon from "@mui/icons-material/Login";

import Login from "./Login";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    height: "100px",
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&.Mui-selected": {
      color: theme.typography.fontColor,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function CustomizedTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", zIndex: 1 }}>
      <Box sx={{ bgcolor: "#ffffff", zIndex: 999 }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          variant="scrollable"
          sx={{
            //width: "100%",
            //zIndex: 9999,
            //position: "absolute",
            backgroundColor: "transparent",
            "@media(max-width: 650)": {
              m: 0,
              p: 0,
            },
          }}
        >
          <StyledTab label="Home" {...a11yProps(1)} icon={<HomeIcon />} />
          <StyledTab
            label="Services"
            {...a11yProps(2)}
            icon={<HomeRepairServiceIcon />}
          />
          <StyledTab label="About" {...a11yProps(3)} icon={<InfoIcon />} />
          <StyledTab
            label="Contact"
            {...a11yProps(4)}
            icon={<ContactPageIcon />}
          />
          <StyledTab
            label="Login"
            icon={<LoginIcon />}
            sx={{ marginLeft: "auto" }}
            {...a11yProps(6)}
          />
        </StyledTabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Services />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Contact />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Login />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}

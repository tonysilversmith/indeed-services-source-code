import React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled, Box, Typography } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        marginTop: "50px",
        marginBottom: 10,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 650px)": {
          marginTop: "300px",
        },
      }}
    >
      <Typography variant="h2" sx={{}}>
        FAQs
      </Typography>
      <Box sx={{ width: "85vw" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What Services do we provide?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, vero nostrum! Harum id ducimus beatae. Facilis hic
              non tempore, est vitae eligendi. Voluptas rem animi recusandae
              dolorum vitae reiciendis! Error voluptatibus ipsum ab autem
              accusantium voluptate magni dolore non perferendis dolor iusto
              laudantium qui aliquid, id et? Omnis eos hic quaerat, et est
              doloremque quam magnam?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What is new?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              asperiores modi accusamus ipsa quod quisquam itaque ratione?
              Praesentium quos id illum eos odio voluptates eum iusto nostrum,
              sit hic facilis voluptatum corrupti ducimus, laudantium sed quidem
              eaque ex repellendus. Ullam facere eligendi quia fugiat ea.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Why choose us?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              iste consequuntur commodi aliquam rem nemo dolor molestias quas
              doloremque odio, incidunt nam amet quia repellat quo? Deserunt
              tenetur qui enim, officia voluptatum consectetur laborum sed
              corporis distinctio assumenda veritatis consequatur vero quam
              maxime amet dolore cum autem voluptatem blanditiis. Accusamus
              culpa, quisquam labore beatae alias facere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary>
            <Typography>
              Why do brand-name drugs look different from their generic
              versions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Government Patent Law do not allow a generic drug or medicine to
              look exactly like other drugs already on the market. Generic
              medicines and brand-name medicines share the same active
              ingredient, but other characteristics, such as colors and
              flavourings
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary>
            <Typography>What is Davaindia Generic Pharmacy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Davaindia Generic Pharmacy a chain for generic pharmacy retail
              outlets across India established in 2017 with the aim to provide
              affordable and quality medicine to all and doing that have
              provided Happiness of Good Health for all. Davaindia Generic Phar
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary>
            <Typography>
              How many Davaindia Generic Pharmacy open till date and at what
              location?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Currently we have more than 550 + operational store, 25-30 are in
              execution process and our presence in 13 states, such as
              Chhattisgarh, Delhi, Gujarat, Haryana, Himachal Pradesh, Kerala,
              Madhya Pradesh, Maharshatra, Odisha, Rajasthan, Tripura, Uttar P
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary>
            <Typography>
              Can I directly buy the alternative that you have suggested?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Doctor’s prescription is required to get a generic medicine, the
              OTC medicines can be bought directly from the counter.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary>
            <Typography>
              Where can I get more information about Generic medicine?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You consult to pharmacist, doctors or Davaindia Product care
              department for more information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary>
            <Typography>
              Are Generic Drugs as effective as branded drugs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, The generic drugs have similar efficacy and therapeutic value
              as that of the branded medicines.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary>
            <Typography>
              What types of products Davaindia can provide?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We have total 1500+ products available, which includes “Generic
              medicine, Health & Wellness, OTC, Cosmetics, Nutraceuticals,
              Protein Supplements & Ayurvedic.”
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary>
            <Typography>
              How do generic medicines benefit the patients?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              By taking generic medicines, a patient can save upto 90% on your
              medicine expenses. As the medicines are available at an affordable
              price
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary>
            <Typography>
              If there is any side effect, what should I have to do? Can I
              return the medicine?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As Generic medicine are similar in safety and effectiveness. Our
              each products are “COA (Certificate of Authenticity) certified”.
              Regarding quality complain and concern you can contact to “Product
              care department” on +91 990 470 9558. If need, they will make you
              available the “COA certificate” also. And if still you are not
              satisfy, you can return those medicine to our respective store,
              from where you purchased and write to us at info@davaindia.com
              with the details to verify and take corrective action.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
        >
          <AccordionSummary>
            <Typography>
              How should I inquire on medicine requirement?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please download the davaindia application to find alternative to
              your branded medicine, you can buy it online from the application
              or locate a davaindia store near you and speak to the pharmacist
              there for more information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
        >
          <AccordionSummary>
            <Typography>
              Doctor does not prescribe & suggest Generic medicine, so are they
              safe?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Somehow,we don’t agree with you. We have few clients, who are
              doctors by profession. Even Medical Council of India (MCI)
              generated a circular dated 21st July 2017 stating that Every
              Physician should prescribe drugs with generic name legibly and
              preferably in capital letters and he / she shall ensure that there
              is a rational prescription and use of drugs. Also, the biggest
              initiative taken by government of India, through Jan Aushadhi
              Kendra, people started being aware about benefits of generic
              medicines and are asking for the same from pharmasists.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;

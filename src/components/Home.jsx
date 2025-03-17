import React, { useContext, useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Carousel from "./Carousel";
import CardsCarousel from "./CardsCarousel.jsx";
import products from "../products.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HandymanIcon from "@mui/icons-material/Handyman";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router";
import { globalContext } from "../App.jsx";
import ContactForm from "./ContactForm.jsx";

const Home = () => {
  const { setNavlink } = useContext(globalContext);
  const navigate = useNavigate();
  //filter items as per type
  const molecularSieves = products.filter((e) => e.type === "Molecular Sieves");
  const valves = products.filter((e) => e.type === "Industrial Valves");

  useEffect(() => {
    setNavlink("Home");
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        bgcolor: "whitesmoke",
      }}
    >
      {/* <Navbar /> */}
      <Carousel />
      <Box
        key={"section1"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 24px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#364253", padding: 4, textAlign: "center" }}
        >
          What's New at Services Zone
        </Typography>
        <Typography
          sx={{
            color: "#6c798b",
            textAlign: "center",
            padding: { md: "0 120px" },
            fontSize: "14px",
          }}
        >
          Our Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            paddingTop: 5,
            alignItems: "center",
          }}
        >
          {/* Supply Card */}
          <Paper
            elevation={4}
            sx={{
              width: { xs: "100%", md: 490 },
              height: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                width: 100,
                display: "flex",
                justifyContent: "center",
                alignSelf: { xs: "center", md: "flex-start" },
                mt: { xs: 1, md: 2 },
              }}
            >
              <RocketLaunchIcon
                sx={{
                  bgcolor: "#0082cf",
                  color: "#fff",
                  fontSize: "54px",
                  padding: 1,
                  borderRadius: 10,
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Supply
              </Typography>
              <Typography sx={{ color: "#253041" }}>
                Suppliers of PSA Nitrogen Gas Plants, Oxygen Gas Plants,
                Compressed Air Drying Units, Fabrication of Pressure Vessels,
                and Accessories.
              </Typography>
              <Button
                sx={{
                  color: "#5e8930",
                  textTransform: "capitalize",
                  p: 0,
                  alignSelf: { xs: "center", md: "flex-start" },
                }}
                onClick={()=>{navigate('/services/service-details/supply')}}
              >
                Explore more <KeyboardArrowRightIcon />
              </Button>
            </Box>
          </Paper>

          {/* Installation & Commissioning Card */}
          <Paper
            elevation={4}
            sx={{
              width: { xs: "100%", md: 490 },
              height: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                width: 100,
                display: "flex",
                justifyContent: "center",
                alignSelf: { xs: "center", md: "flex-start" },
                mt: { xs: 1, md: 2 },
              }}
            >
              <HandymanIcon
                sx={{
                  bgcolor: "#0082cf",
                  color: "#fff",
                  fontSize: "54px",
                  padding: 1,
                  borderRadius: 10,
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#000", fontWeight: "bold" }}
              >
                Installation & Commissioning
              </Typography>
              <Typography sx={{ color: "#253041" }}>
                Installation of PSA Nitrogen Gas Plants, Oxygen Gas Plants,
                Compressed Air Drying Units, Fabrication of Pressure Vessels,
                and Accessories.
              </Typography>
              <Button
                sx={{
                  color: "#5e8930",
                  textTransform: "capitalize",
                  p: 0,
                  alignSelf: { xs: "center", md: "flex-start" },
                }}
                onClick={()=>{navigate('/services/service-details/installation-&-commisioning')}}
              >
                Explore more <KeyboardArrowRightIcon />
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box
        key={"section2"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#364253", padding: 4, textAlign: "center" }}
        >
          Categorized Product Zone
        </Typography>
        <Typography
          sx={{
            color: "#6c798b",
            textAlign: "center",
            padding: { md: "0 120px" },
            fontSize: "14px",
          }}
        >
          You can find below all the products related to Nitrogen gas Plants,
          Air Drying Units and other industrial products.
        </Typography>
      </Box>
      {/* <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px 10px", md: "20px 120px" },
          }}
        >
          <Typography variant="h5" sx={{ color: "#364253" }}>
            Molecular Sieves
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0082cf",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/molecular-sieves");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={molecularSieves} />
      </Box> */}
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px 10px", md: "20px 120px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#0082cf", padding: { xs: 1, md: 0 },fontWeight:'bold' }}
          >
            Industrial Valves
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#253041",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/industrial-valves");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={valves} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px 10px", md: "20px 120px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#0082cf", padding: { xs: 1, md: 0 },fontWeight:'bold' }}
          >
            All Products
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#253041",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/all-products");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={products} />
      </Box>
      <Box
        key={"section3"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          padding: { xs: "16px 4px", md: "80px 120px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
            height: { md: "600px" },
            width: "100%",
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: 400, md: "100%" },
              position: "relative",
              display: "flex",
              justifyContent: "end",
              m: { xs: "16px 0" },
            }}
          >
            <Box
              component={"img"}
              src="/wasipsaplant.jpg"
              sx={{
                position: "absolute",
                width: "92%",
                height: { xs: 400, md: "100%" },
                bottom: { xs: 20, md: 30 },
                right: { xs: 20, md: 30 },
                //mb: { xs: 3, md: 0 },
                zIndex: 1,
              }}
            />
            <Box sx={{ width: "90%", height: "100%", bgcolor: "#0082cf" }} />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              ml: { md: 1 },
              p: { xs: "8px" },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#0082cf",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                  marginLeft: "20px",
                }}
              />
              ABOUT US
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                }}
              />
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#253041",
                mb: 2,
                fontSize: { xs: "32px", md: "54px" },
                fontWeight: 900,
                fontFamily: "rubik,sans-serif;",
              }}
            >
              WE HAVE BEST SOLUTION WITH US
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                gap: 2,
                color: "#364253",
              }}
            >
              WASI PSA Systems, established in 2014, is a leading manufacturer
              of nitrogen gas plants utilizing Pressure Swing Adsorption (PSA)
              technology. Specializing in on-site nitrogen generation, we offer
              innovative and reliable solutions to various industries. With a
              decade of experience, we've earned a reputation for delivering
              high-quality systems that meet industrial nitrogen needs
              efficiently and sustainably.
              <br />
              <br />
              WASI PSA Systems also PSA Oxygen Gas Plants, Compressed Air Drying
              Units and Fabrication of Pressure Vessels etc.. We provide
              advanced solutions for on-site Oxygen and Compressed Air
              generation, catering to diverse industrial requirements.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        key={"section4"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "16px 4px", md: "40px 120px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
            height: { md: "500px" },
            width: "100%",
            mb: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: { xs: "block", md: "none",color:'#253041', fontWeight:600},
              textAlign: "center",
              mb: 4,
            }}
          >
            Request Form
          </Typography>
          <ContactForm />
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              //justifyContent: "space-evenly",
              gap: 3,
              pl:{xs:1,md:0}
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#0082cf",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                  marginLeft: "20px",
                }}
              />
              CONTACT US
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                }}
              />
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: "#253041",
                mb: 2,
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 900,
                fontFamily: "rubik,sans-serif;",
              }}
            >
              Get A Free Consultation
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                gap: 2,
              }}
            >
              <LocationOnIcon sx={{ color: "#0082cf", fontSize: "32px" }} />
              Akkayyapalem, Visakhapatnam.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                gap: 2,
              }}
            >
              <CallIcon sx={{ color: "#0082cf", fontSize: "32px" }} /> +91
              7013365133
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                gap: 2,
              }}
            >
              <EmailIcon sx={{ color: "#0082cf", fontSize: "32px" }} />
              info@wasipsasystems.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

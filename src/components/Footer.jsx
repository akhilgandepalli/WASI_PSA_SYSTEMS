import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Clients",
    "Contact Us",
    "Certifications",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#253041",
        height: { xs: "auto", md: "400px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { md: "center" },
          padding: { xs: 2, md: "0px 120px" },
          gap: 4,
          height: "85%",
        }}
      >
        <Box
          sx={{
            height: "80%",
            width: { md: "25%" },
            paddingTop: { md: "16px" },
          }}
        >
          <Box component={"img"} src="/Wasi_logo2.jpg" width={250} />
          <Typography
            sx={{ color: "#fff", padding: "16px 0", fontSize: "14px" }}
          >
            WASI PSA Systems, established in 2014, is a leading manufacturer of
            nitrogen gas plants utilizing Pressure Swing Adsorption (PSA)
            technology.
          </Typography>
          <Button variant="contained">Download Broucher</Button>
        </Box>
        <Box sx={{ height: "80%", width: { md: "10%" } }}>
          <Box
            sx={{
              color: "#fff",
              padding: "16px 0",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Quick Links
            <div
              style={{
                backgroundColor: "#5e8930",
                width: "60px",
                height: "1px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { md: "space-between" },
              gap: 2,
            }}
          >
            {quickLinks.map((link) => (
              <Box
                key={link}
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  "&:hover": {
                    pl: 2,
                    color: "#5e8930",
                    transition: "0.5s ease",
                  },
                }}
                onClick={() => {
                  link == "Home"
                    ? navigate("/")
                    : link == "Services"
                    ? navigate(`/services/service-details/supply`)
                    : navigate(`/${link.toLowerCase().split(" ").join("-")}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {link}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "23%" },
            height: "80%",
            display: "flex",
            flexDirection: "column",
            //justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <Box
            sx={{
              color: "#fff",
              padding: "16px 0",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Address
            <div
              style={{
                backgroundColor: "#5e8930",
                width: "60px",
                height: "1px",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              gap: 1,
              color: "#fff",
            }}
          >
            <LocationOnIcon sx={{ color: "#0082cf", fontSize: "28px" }} />
            Akkayyapalem, Visakhapatnam.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              gap: 1,
              color: "#fff",
            }}
          >
            <CallIcon sx={{ color: "#0082cf", fontSize: "28px" }} /> +91
            7013365133
          </Typography>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              gap: 1,
              color: "#fff",
            }}
          >
            <EmailIcon sx={{ color: "#0082cf", fontSize: "28px" }} />
            info@wasipsasystems.com
          </Typography>
        </Box>
        <Box sx={{ height: "80%", paddingTop: { md: "16px" } }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.16889520885!2d83.29517117465794!3d17.736679383211303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3942d6ace3c7f9%3A0x894ce0a466908a8d!2sWASI%20PSA%20SYSTEMS!5e0!3m2!1sen!2sin!4v1741068965745!5m2!1sen!2sin"
            width="100%"
            height="250px"
            style={{ border: 0, padding: "4px" }}
            tabIndex="0"
          />
        </Box>
      </Box>
      <Box
        component={"a"}
        href="#"
        sx={{
          width: "100%",
          bgcolor: "#253035",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
        onClick={handleScrollToTop}
      >
        <Typography
          sx={{ color: "#fff", pl: 2, fontSize: { xs: "13px", md: "14px" } }}
        >
          Copyright © 2023{" "}
          <span style={{ color: "#5e8930" }}>Wasi Psa Systems</span>. All rights
          reserved. Design & Developed By{" "}
          <span style={{ color: "#5e8930" }}>Colourmoon</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

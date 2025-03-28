import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { globalContext } from "../App";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm";
import Banner from "./Banner";

const Contact = () => {
  const { setNavlink } = useContext(globalContext);
  // const [contact, setContact] = useState({});
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     fullname: "",
  //     email: "",
  //     message: "",
  //     mobile: "",
  //   },
  // });

  // const onSubmit = (data) => {
  //   setContact(data);
  //   console.log(data);
  //   reset();
  // };

  useEffect(() => {
    setNavlink("Contact Us");
  },[]);

  return (
    <>
      <Banner name={'Contact Us'} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "40px 20px", md: "80px 120px" },
          gap: 3,
        }}
      >
        <Typography variant="h6" sx={{display:{xs:'block',md:'none'},textAlign:'center',mb:2,fontWeight:600}}>Request Form</Typography>
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
          <ContactForm />
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              //justifyContent: "space-evenly",
              gap: 3,
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

      <Box
        sx={{
          padding: { md: "0px 120px 60px 120px" },
          mb: { xs: 2, md: 0 },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.16889520885!2d83.29517117465794!3d17.736679383211303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3942d6ace3c7f9%3A0x894ce0a466908a8d!2sWASI%20PSA%20SYSTEMS!5e0!3m2!1sen!2sin!4v1741068965745!5m2!1sen!2sin"
          width="100%"
          height="450px"
          style={{ border: 0, padding: "4px" }}
          tabIndex="0"
        />
      </Box>
    </>
  );
};

export default Contact;

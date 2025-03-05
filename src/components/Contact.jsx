import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { globalContext } from "../App";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const { setNavlink } = useContext(globalContext);
  const [contact, setContact] = useState({});
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      mobile: "",
    },
  });

  const onSubmit = (data) => {
    setContact(data);
    console.log(data);
    reset();
  };

  useEffect(() => {
    setNavlink("Contact Us");
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "80px 20px 20px 20px", md: "20px 120px" },
          gap: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#364253",
            padding: { xs: "24px 0", md: "48px 0" },
            fontSize: { xs: "32px", md: "42px" },
          }}
        >
          Contact Us
        </Typography>
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
          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              gap: { xs: 2, md: 0 },
            }}
          >
            <Controller
              name="fullname"
              control={control}
              rules={{ required: "Full Name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  required
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  required
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="mobile"
              control={control}
              rules={{
                required: "Mobile no is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid mobile number",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Mobile no"
                  type="number"
                  required
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Message"
                  required
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                margin: "24px 0",
                bgcolor: "#0082cf",
                padding: "16px 0",
                borderRadius: 0,
                fontSize: "16px",
                borderRight: "4px solid #99dc06",
                "&:hover": {
                  bgcolor: "#99dc06",
                  color: "#0082cf",
                  transition: "0.5s ease",
                },
              }}
            >
              Submit Now
            </Button>
          </Box>
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
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#9cdd00", display: "flex", alignItems: "center" }}
            >
              GET A QUOTE
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                  marginLeft: "20px",
                }}
              ></div>
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: "#0082cf",
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
              <LocationOnIcon sx={{ color: "#5e8930", fontSize: "32px" }} />
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
              <CallIcon sx={{ color: "#5e8930", fontSize: "32px" }} /> +91
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
              <EmailIcon sx={{ color: "#5e8930", fontSize: "32px" }} />
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

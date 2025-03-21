import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

const ContactForm = () => {
  const { cart, setCart } = useContext(globalContext);
  const [submitData, setSubmitData] = useState("");
  const navigate = useNavigate();
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

  const onSubmit = async (data) => {
    if (cart.length > 0) {
      setSubmitData(await { ...data, cartItems: cart });
      console.log(await { ...data, cartItems: cart });
      reset();
      alert("Request Submitted");
      setCart([]);     
      window.scrollTo({top:0,behavior:'smooth'});
      navigate("/");
    } else {
      alert("Your Cart is Empty!\n\nPlease add items in your cart");
    }
  };
  const AnimatedButton = styled(Button)({
    backgroundColor: "#5e8930",
    color: "white",
    overflow: "hidden",
    position: "relative",
    transition: "color 0.3s ease-in-out",
    margin: "24px 0",
    padding: "16px 0",
    borderRadius: 0,
    fontSize: "16px",
    borderRight: "4px solid #0082CF",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "100%",
      width: "100%",
      height: "100%",
      backgroundColor: "#0082CF",
      transition: "left 0.5s ease-in-out",
    },
    "&:hover::before": {
      left: 0,
    },
    "&:hover": {
      color: "white",
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { xs: "100%", md: "40%" },
        //height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 2,
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
      <AnimatedButton
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
      >
        <span style={{ zIndex: 1 }}>Submit Now</span>
      </AnimatedButton>
    </Box>
  );
};

export default ContactForm;

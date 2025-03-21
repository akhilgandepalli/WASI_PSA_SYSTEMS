import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {globalContext } from "../App";
import { useNavigate } from "react-router";
import ContactForm from "./ContactForm";

const CheckoutForm = () => {
  const { cart, setNavlink } = useContext(globalContext);
  const navigate = useNavigate();

  const subTotal =
    cart.length > 0
      ? cart.reduce((total, item) => total + item.quantity, 0)
      : 0;

  // const onSubmit = (data) => {
  //   setShippingData({ ...data });
  //   alert(
  //     `Your order is Placed\nTotal items: ${subtotal}\nWe will contact you soon.\n\n Thank you`
  //   );
  //   setCart([]);
  //   navigate("/");
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    setNavlink("checkout");
  });

  return (
    <Box
      sx={{
        border: { md: "1px solid #d6d6d6" },
        margin: { xs: "60px 20px", md: "0 120px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", padding: "40px 0", color: "#364253" }}
      >
        Request Form
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: { md: 4 },
        }}
      >
        <ContactForm />
        <Box
          sx={{
            minWidth: { xs: "100%", md: "300px" },
            p: 2,
            background: "#f5f5f5",
            borderRadius: 2,
            boxShadow: 2,
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            💰 Order Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" sx={{ mb: 3 }}>
            Total:{" "}
            <strong style={{ fontSize: "16px" }}>
              {subTotal + ` ${subTotal > 1 ? "items" : "item"} `}
            </strong>
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            sx={{ color: "#0082cf" }}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutForm;

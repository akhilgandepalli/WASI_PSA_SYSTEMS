import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { amountSeparator, globalContext } from "../App";
import { useNavigate } from "react-router";
import ContactForm from "./ContactForm";

const CheckoutForm = () => {
  const { cart, setCart, setNavlink } = useContext(globalContext);
  const [shippingData, setShippingData] = useState("");
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setFocus,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      city: "",
      country: "",
      state: "",
      pincode: "",
      mobile: "",
    },
  });

  const navigate = useNavigate();

  const subtotal = cart.length>0?cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  ):0;

  const onSubmit = (data) => {
    setShippingData({ ...data, total: subtotal });
    alert(
      `Your order is Placed\nTotal amount: Rs.${subtotal}.00\nWe will contact you soon.\n\n Thank you`
    );
    setCart([]);
    navigate("/");
    window.scrollTo(0,0)
  };

  useEffect(() => {
    setNavlink("checkout");
    console.log("Shipping Data", shippingData);
  });

  return (
    <Box
      sx={{
        border: {md:"1px solid #d6d6d6"},
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
          gap:{md:4}
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
            Subtotal{` (${cart.length>1?cart.length+') items':+cart.length+') item'}`}:{" "}
            <strong style={{ fontSize: "16px" }}>
              Rs.{amountSeparator(subtotal)}.00
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

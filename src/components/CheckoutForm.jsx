import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

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
        border: "1px solid #d6d6d6",
        margin: { xs: "60px 0", md: "0 120px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", padding: "40px 0", color: "#364253" }}
      >
        Shipping Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: { md: "650px" }, padding: 1 }}
        >
          <div style={{ padding: "24px 0px" }}>
            Please enter valid details for instant response
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Controller
              name="firstname"
              control={control}
              rules={{ required: "First Name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="First Name"
                  required
                  size="small"
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="lastname"
              control={control}
              rules={{ required: "Last Name is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  size="small"
                  required
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                  size="small"
                  required
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Address"
                  size="small"
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
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Controller
              name="city"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="City"
                  size="small"
                  required
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Country"
                  size="small"
                  required
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Controller
              name="state"
              control={control}
              rules={{ required: "State is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="State"
                  size="small"
                  required
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="pincode"
              control={control}
              rules={{
                required: "ZIP Code is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Please enter a valid 6-digit number",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="ZIP Code"
                  size="small"
                  required
                  variant="outlined"
                  sx={{ width: 280 }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                  size="small"
                  type="number"
                  required
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{
              margin: "24px 0",
              bgcolor: "#0082cf",
              textTransform: "capitalize",
            }}
          >
            Place Order
          </Button>
        </Box>
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
            Subtotal{` (${cart.length}) items`}:{" "}
            <strong style={{ fontSize: "16px" }}>
              Rs.{subtotal.toFixed(2)}
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

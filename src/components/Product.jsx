import { ShoppingCart } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import products from "../products";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import { globalContext } from "../App";
import { useNavigate, useParams } from "react-router";
import Recommended from "./Recommended";
import AfterAddCart from "./AfterAddCart";
const Product = () => {
  const [value, setValue] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const { cart, setCart, setNavlink } = useContext(globalContext);
  const { name, id } = useParams();
  const productItem = products.find((item) => item.id == id);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleIncrease = () => {
    setValue((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const handleDecrease = () => {
    setValue((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if item exists
        if (product.id === productItem.id) {
          return prevCart.map((item) =>
            item.id === productItem.id
              ? { ...item, quantity: item.quantity + Number(value) }
              : item
          );
        } else {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
      } else if (product.id === productItem.id) {
        // Add new item with given quantity value
        return [
          ...prevCart,
          {
            ...{
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
            },
            quantity: Number(value),
          },
        ];
      } else {
        // Add new item with quantity 1
        return [
          ...prevCart,
          {
            ...{
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
            },
            quantity: 1,
          },
        ];
      }
    });
    setOpenDialog(true);
    //console.log("Cart:", cart); // For debugging
  };

  useEffect(() => {
    setNavlink("Product");
  },[]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 0,
          margin: { xs: "80px 0 0 0", md: "0 120px 40px 120px" },
          padding: "30px",
          border: "1px solid #d6d6d6",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: { md: "500px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #d6d6d6",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component={"img"}
            src={productItem.image}
            sx={{
              objectFit: "contain",
              maxHeight: { md: "400px" },
              maxWidth: { xs: "100%", md: "auto" },
            }}
          />
        </Box>
        <Box
          sx={{
            width: { md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ borderBottom: "1px solid #d6d6d6", pb: 2 }}
          >
            {productItem.name}
          </Typography>
          <Typography variant="h6">
            <strong>Price: </strong>Rs.{productItem.price}.00
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", bgcolor: "blue", textAlign: "center" }}
          >
            Connect On info@wasipsasystems.com / Call 7013365133 for bulk
            enquiry
          </Typography>
          <Typography variant="body1">
            <strong>Description: </strong>
            {productItem.desc}
          </Typography>
          <Box
            sx={{
              borderTop: "1px solid #d6d6d6",
              borderBottom: "1px solid #d6d6d6",
            }}
          >
            <Box
              component={"img"}
              src="/fb-logo.jfif"
              width={20}
              sx={{ m: 2 }}
            />
            <Box
              component={"img"}
              src="/X-logo.jfif"
              width={20}
              sx={{ m: 2 }}
            />
            <Box
              component={"img"}
              src="/pinterest-logo.jfif"
              width={40}
              sx={{ m: 0.8 }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <Typography variant="h6" sx={{fontSize:'18px'}}>Quantity</Typography> */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  type="number"
                  label="Quantity"
                  value={value}
                  fullWidth
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                  InputProps={{
                    inputProps: {
                      min: 1,
                      step: 1,
                      max: 10,
                    }, // Ensures value starts at 1 and increments/decrements by 1
                  }}
                  variant="outlined"
                  size="small"
                  sx={{ width: { md: "200px" } }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #d6d6d6",
                    borderRadius: 1,
                    padding: { xs: "0 8px", md: "0 4px" },
                  }}
                >
                  <IconButton
                    onClick={handleIncrease}
                    sx={{ p: 0, color: "#364253" }}
                  >
                    <KeyboardArrowUpIcon
                      sx={{ fontSize: "19px", mb: "-2px" }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={handleDecrease}
                    sx={{ p: 0, color: "#364253" }}
                  >
                    <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />
                  </IconButton>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                endIcon={<ShoppingCart />}
                onClick={() => handleAddToCart(productItem)}
                sx={{
                  bgcolor: "#0082cf",
                  display: "flex",
                  justifyContent: "space-between",
                  textTransform: "capitalize",
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AfterAddCart
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        productItem={productItem}
      />
      <Recommended />
    </>
  );
};

export default Product;

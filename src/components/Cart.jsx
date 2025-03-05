import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

const ShowCart = () => {
  const { cart, setCart, setNavlink } = useContext(globalContext);
  const navigate = useNavigate();
  const handleQuantityChange = (id, delta) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const handleItemClick=(item) => {
    navigate(
      `/products/${item.name
        .split("/")
        .join("")
        .split(" ")
        .join("-")
        .toLowerCase()}/${item.id}`
    );
    window.scrollTo(0, 0);
  }

  // Calculate subtotal
  const subtotal = cart.length>0?cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  ):0;
  useEffect(() => {
    setNavlink("Cart");
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        justifyContent: "center",
        p: { xs: "80px 20px 20px 20px", md: 2 },
      }}
    >
      {/* Cart Items */}
      <Box sx={{ maxWidth: { xs: "100%", md: 600 }, width: "100%" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          🛒 Your Cart
        </Typography>
      {/* Empty Cart */}
        {cart.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "250px",
              gap: 6,
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Your shopping cart is empty.
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: "#0082cf" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          //Cart Items
          cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: { md: "center" },
                mb: 2,
                p: 2,
                boxShadow: 2,
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 80, md: 100 },
                  objectFit: "cover",
                  borderRadius: 1,
                }}
                onClick={()=>{handleItemClick(item)}}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  pt: { xs: 0 },
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#364253"
                  sx={{ fontSize: { xs: "16px" } }}
                  onClick={()=>{handleItemClick(item)}}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="#000">
                  Rs.{item.price}.00
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, ml: -1 }}
                >
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, -1)}
                    color="error"
                  >
                    {item.quantity === 1 ? (
                      <Delete sx={{ fontSize: "20px" }} />
                    ) : (
                      <Remove sx={{ fontSize: "20px" }} />
                    )}
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, 1)}
                    color="primary"
                  >
                    <Add sx={{ fontSize: "20px" }} />
                  </IconButton>
                </Box>
              </CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#364253"
                  sx={{ minWidth: 80, textAlign: "right" }}
                >
                  Rs.
                  {(parseFloat(item.price) * item.quantity).toFixed(2)}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveItem(item.id)}
                  color="error"
                  sx={{ textTransform: "capitalize", p: 0 }}
                >
                  Remove
                </Button>
              </Box>
            </Card>
          ))
        )}
      </Box>

      {/* Summary Box */}
      {cart.length > 0 && (
        <Box
          sx={{
            minWidth: { xs: "100%", md: 250 },
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
          <Typography variant="body1" sx={{ mb: 1 }}>
            Subtotal: <strong>Rs.{subtotal.toFixed(2)}</strong>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 1, bgcolor: "#0082cf" }}
            onClick={()=>{navigate('/checkout')}}
          >
            Checkout
          </Button>
          <Button variant="outlined" fullWidth sx={{ color: "#0082cf" }} onClick={()=>{navigate('/')}} >
            Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ShowCart;

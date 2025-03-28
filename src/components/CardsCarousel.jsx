import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import { ArrowForwardIos, ShoppingCart } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "../products";
import { globalContext } from "../App";
import { useNavigate } from "react-router";
import AfterAddCart from "./AfterAddCart";

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "white",
      borderRadius: 0,
      "&:hover": {
        background: "rgba(0, 130, 207, 0.8)",
      },
    }}
  >
    <ArrowBackIosNewIcon sx={{ "&:hover": { color: "#fff" } }} />
  </IconButton>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "white",
      borderRadius: 0,
      "&:hover": {
        background: "rgba(0, 130, 207, 0.8)",
      },
    }}
  >
    <ArrowForwardIos sx={{ "&:hover": { color: "#fff" } }} />
  </IconButton>
);

const CardsCarousel = ({ items }) => {
  const [hovered, setHovered] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const { cart, setCart } = useContext(globalContext);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Mobile screens
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if item exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [
          ...prevCart,
          {
            ...{
              id: product.id,
              name: product.name,
              image: product.image,
            },
            quantity: 1,
          },
        ];
      }
    });
    setOpenDialog(true);
    //console.log("Cart:", cart); // For debugging
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        padding: { xs: "20px 12px", md: "20px 112px" },
      }}
    >
      {" "}
      {/* Set width to 800px and center */}
      <Slider {...settings}>
        {items.map((item, i) =>
          item.id ? (
            <Box
              key={item.id}
              sx={{ px: 1, position: "relative" }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* item Card */}
              <Card
                elevation={5}
                sx={{
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  position: "relative",
                  transition: "0.3s",
                  backgroundColor: hovered === item.id ? "#333" : "#fff",
                  color: "#000",
                }}
              >
                <CardMedia
                  component={"img"}
                  image={item.image}
                  title={item.name}
                  sx={{
                    height: 200,
                    opacity: hovered === item.id ? 0.3 : 1,
                    transition: "0.3s",
                    objectFit: "contain",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Typography variant="p" sx={{ color: "#364253" }}>
                    {item.name}
                  </Typography>
                  
                </CardContent>
                {/* Hover Overlay */}
                {hovered === item.id && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      transition: "0.3s",
                    }}
                    onClick={() => {
                      navigate(
                        `/products/${item.name
                          .split("/")
                          .join("")
                          .split(" ")
                          .join("-")
                          .toLowerCase()}/${item.id}`
                      );
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography variant="h6">{item.name}</Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ShoppingCart />}
                      sx={{ textTransform: "capitalize" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button sx={{ color: "#fff" }}>
                      <ZoomOutMapOutlinedIcon />
                    </Button>
                    
                    <AfterAddCart
                      openDialog={openDialog}
                      setOpenDialog={setOpenDialog}
                      productItem={item}
                    />
                  </Box>
                )}
              </Card>
            </Box>
          ) : (
            <Box
            key={item}
              sx={{
                height: 150,
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
                color: "#000",
                //margin:{md:'0 12px'}
                px:1,
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                  padding: "8px 16px",
                  borderRadius:4,
                }}
              >
                <CardMedia
                  component={"img"}
                  image={item}
                  title={item}
                  sx={{
                    width: 140,
                    transition: "0.3s",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Box>
          )
        )}
      </Slider>
    </Box>
  );
};

export default CardsCarousel;

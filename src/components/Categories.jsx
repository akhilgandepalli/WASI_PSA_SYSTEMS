import React, { useContext, useEffect, useState } from "react";
import products from "../products";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import { amountSeparator, globalContext } from "../App";
import { useNavigate, useParams } from "react-router";
import { ShoppingCart } from "@mui/icons-material";
import AfterAddCart from "./AfterAddCart";
import Banner from "./Banner";

const Categories = () => {
  const [hovered, setHovered] = useState("");
  const { cart, setCart, setNavlink } = useContext(globalContext);
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();
  let itemType = type
    .split("-")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
  const items = products.filter((item) => {
    if (type === "all-products") {
      return item;
    } else if (type == "psa-gas-plants") {
      let Type = itemType.slice(0, 3).toUpperCase() + itemType.slice(3);
      itemType = Type;
      return item.type === itemType;
    } else {
      return item.type === itemType;
    }
  });

  const navigate = useNavigate();

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
    setNavlink(itemType);
  });

  return (
    <>
      <Banner name={itemType} />
      <Box sx={{ padding: {md: "0px 120px" } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            rowGap: 5,
            m: "40px 0",
          }}
        >
          {items.length <= 0 ? (
            <Typography sx={{ height: "200px" }}>
              There are no products in this category.
            </Typography>
          ) : (
            items.map((item) => (
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
                    minHeight: 300,
                    width: 320,
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
                      alignItems: "start",
                      justifyContent: "space-between",
                      gap: 2,
                    }}
                  >
                    <Typography variant="p" sx={{ color: "#364253" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000",
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                      }}
                    >
                      Rs.{amountSeparator(item.price)}.00
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
                      <Typography
                        variant="body1"
                        sx={{ mb: 2, fontFamily: "sans-serif" }}
                      >
                        Rs.{amountSeparator(item.price)}.00
                      </Typography>
                      <AfterAddCart
                        openDialog={openDialog}
                        setOpenDialog={setOpenDialog}
                        productItem={item}
                      />
                    </Box>
                  )}
                </Card>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default Categories;

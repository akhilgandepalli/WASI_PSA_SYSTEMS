import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import { ShoppingCart } from "@mui/icons-material";
import products from "../products";
import { globalContext } from "../App";
import { useNavigate } from "react-router";
import AfterAddCart from "./AfterAddCart";

const SearchResult = () => {
  const [hovered, setHovered] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const { setCart, setNavlink } = useContext(globalContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

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

  const results = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(()=>{
    setNavlink('Search Products')
  })

  return (
    <>
      <Box sx={{ padding: { xs: "80px 8px", md: "0px 120px" } }}>
        <Typography variant="h6" sx={{ padding: "20px 0" }}>
          Search Results for term: <strong>"{searchQuery || "Nothing"}"</strong>
        </Typography>
        {results.length <= 0 ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: "60px 0", color: "#364253" }}
          >
            There are no products matching this search term.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              rowGap: 5,
              mb: 6,
              mt: 6,
            }}
          >
            {results.slice(0, 5).map((item) => (
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
                      Rs.{item.price}.00
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
                        Rs.{item.price}.00
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
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default SearchResult;

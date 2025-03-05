import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer.jsx";
import products from "./products.js";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
import Terms from "./components/Terms.jsx";
import Contact from "./components/Contact.jsx";
import Categories from "./components/Categories.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SearchResult from "./components/SearchResult.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import AboutUs from "./components/AboutUs.jsx";


export const globalContext = createContext();

function App() {
  const getCartFromStorage = () => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromStorage);
  const [navlink, setNavlink] = useState("")

  const pages = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Clients",
    "Contact Us",
  ];

  // Save cart to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <globalContext.Provider value={{ cart, setCart, pages, navlink, setNavlink }}>
        <BrowserRouter>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{
                height: "40px",
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                alignItems: "center",
                bgcolor: "rgba(235,235,235,1)",
                pl: 15.5,
                marginBottom: "100px",
              }}
            >
              <MailOutlineIcon sx={{ fontSize: "13px" }} />
              <Typography
                sx={{
                  fontSize: "13px",
                  padding: "2px 6px",
                  borderRight: "1px dotted",
                  marginRight: "4px",
                }}
              >
                info@wasipsasystems.com
              </Typography>
              <CallOutlinedIcon sx={{ fontSize: "14px" }} />
              <Typography sx={{ fontSize: "14px", padding: "0 4px" }}>
                7013365133
              </Typography>
            </Box>
            <Navbar />
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:name/:id" element={<Product />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/search-products" element={<SearchResult />} />
            <Route path="/products/categories/:type" element={<Categories />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </globalContext.Provider>
    </>
  );
}

export default App;

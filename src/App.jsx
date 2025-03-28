import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Box, Typography } from "@mui/material";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Categories from "./components/Categories.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import SearchResult from "./components/SearchResult.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Services from "./components/Services.jsx";
import Clients from "./components/Clients.jsx";
import Certifications from "./components/Certifications.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminPage from "./components/AdminPage.jsx";
import { a } from "framer-motion/client";

export const globalContext = createContext();

function App() {
  const getCartFromStorage = () => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };
  const getAdminDetails = () => {
    const adminDetails = sessionStorage.getItem("admin");
    return adminDetails ? JSON.parse(adminDetails) : {isAdmin:false,username:""};
  };

  const [cart, setCart] = useState(getCartFromStorage);
  const [navlink, setNavlink] = useState("");
  const [adminData, setAdminData] = useState(getAdminDetails);

  const pages = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Clients",
    "Contact Us",
  ];
  const clientImages = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.jpeg",
    "/clients/client5.jpeg",
    "/clients/client6.png",
    "/clients/client7.jpeg",
    "/clients/client8.jpeg",
    "/clients/client9.png",
    "/clients/client10.png",
    "/clients/client11.png",
    "/clients/client12.jpeg",
    "/clients/client13.png",
    "/clients/client14.png",
    "/clients/client15.jpeg",
    "/clients/client16.png",
    "/clients/client17.jpeg",
    "/clients/client18.png",
    "/clients/client19.png",
    "/clients/client20.png",
    "/clients/client21.jpeg",
    "/clients/client22.png",
    "/clients/client23.jpeg",
    "/clients/client24.jpeg",
    "/clients/client25.png",
    "/clients/client26.jpeg",
    "/clients/client27.png",
    "/clients/client28.jpeg",
    "/clients/client29.jpeg",
    "/clients/client30.jpeg",
    "/clients/client31.png",
    "/clients/client32.png",
    "/clients/client33.png",
    "/clients/client34.png",
    "/clients/client35.jpeg",
    "/clients/client36.jpeg",
    "/clients/client37.jpeg",
    "/clients/client38.png",
    "/clients/client39.png",
  ];
  const adminCredentials = {
    name: "Wasi_PSA_Systems",
    password: "isaW#psa@2014",
  };

  // Save cart to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("admin", JSON.stringify(adminData));
  }, [cart, adminData]);
  return (
    <>
      <globalContext.Provider
        value={{
          cart,
          setCart,
          pages,
          navlink,
          setNavlink,
          clientImages,
          adminData,
          setAdminData,
          adminCredentials
        }}
      >
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
                color: "#fff",
                bgcolor: "#253041",
                pl: 15.5,
                marginBottom: "100px",
              }}
            >
              <MailOutlineIcon sx={{ fontSize: "13px" }} />
              <Typography
                sx={{
                  fontSize: "14px",
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
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/:username" element={<AdminPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:name/:id" element={<Product />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/search-products" element={<SearchResult />} />
            <Route path="/products/categories/:type" element={<Categories />} />
            <Route
              path="/services/service-details/:type"
              element={<Services />}
            />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ScrollToTopButton />
          <Footer />
        </BrowserRouter>
      </globalContext.Provider>
    </>
  );
}

export default App;

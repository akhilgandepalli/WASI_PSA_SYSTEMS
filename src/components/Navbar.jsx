import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from "./Navlinks.jsx";
import {
  Badge,
  InputBase,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router";
import { globalContext } from "../App.jsx";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [top, setTop] = useState(40)
  const { cart } = useContext(globalContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-products?q=${searchQuery}`);
    }
    setSearchOpen(false);
    console.log(searchQuery);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setTop(0);
      } else {
        setTop(40);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      sx={{
        backgroundColor: !top?"rgba(230, 230, 230, 0.5)":'#fff',
        backdropFilter: "blur(10px)",
        position: "fixed",
        top: { xs: 0, md: top },
        padding: { xs: 1, md: "8px 120px" },
        transition:'top 0.5s ease'
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", p: { md: 0 } }}
      >
        {/* Menu Icon for Mobile */}
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 0, display: { md: "none" } }}
        >
          <MenuIcon onClick={toggleDrawer(true)} />
        </IconButton>

        {/* Logo */}
        <Box
          component={"img"}
          src="/WASI LOGO.png"
          sx={{ height: { xs: "60px", md: "80px" }, mr: { xs: -3, md: 0 } }}
          onClick={() => {
            navigate("/");
          }}
        />

        {/* Navigation Links - Hidden on Mobile */}

        <Navlinks openD={open} toggleDrawer={toggleDrawer} />

        {/* Cart Icon */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            gap: { xs: 0, md: 1 },
            mr: { xs: -2, md: 0 },
          }}
        >
          <Paper
            component="form"
            elevation={10}
            onSubmit={handleSearch}
            sx={{
              position: "absolute",
              bottom: { xs: -60, md: -50 },
              right: { xs: 0, md: 70 },
              display: searchOpen ? "flex" : "none",
              justifyContent: "space-between",
              width: { xs: "250px", md: "450px" },
              padding: "0",
            }}
          >
            <InputBase
              sx={{ p: 1, flex: 1,borderTop:'4px solid #5e8930' }}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
              type="submit"
              sx={{
                backgroundColor: "#5e8930",
                color:'#fff',
                //p: "4px 6px",
                borderRadius:0,
                "&:hover": { background: "#5e8950"},
              }}
            >
              <SearchOutlinedIcon />
            </IconButton>
          </Paper>
          <IconButton onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen?<CloseIcon />:<SearchOutlinedIcon />}
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("/cart");
              window.scrollTo(0, 0);
            }}
            sx={{ mr: { md: -1 } }}
          >
            <Badge badgeContent={cart.length} color="error">
              <LocalMallOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

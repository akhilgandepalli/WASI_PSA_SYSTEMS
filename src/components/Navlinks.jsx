import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { motion } from "framer-motion";
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { globalContext } from "../App";

export default function Navlinks({ openD, toggleDrawer }) {
  const [menu, setMenu] = useState("");
  const [hovered, setHovered] = useState("");
  const { pages, navlink, setNavlink } = useContext(globalContext);
  const navigate = useNavigate();
  const productCategories = [
    "PSA Gas Plants",
    "Pneumatic Valves & Actuators",
    "Compressed Air Dryers",
    "Desiccants",
    "Industrial Valves",
    "Molecular Sieves",
    "Gas Analysers",
    "All Products",
  ];
  const services = ["Supply", "Installation & Commissioning"];

  const handleNavClick = (link) => {
    setNavlink(link);
  };

  const handleMenu = (page) => {
    if (page === "Home") {
      navigate("/");
      setNavlink("Home");
    } else if (page === "About Us") {
      navigate("/about-us");
      setNavlink("About Us");
    } else if (page === "Contact Us") {
      navigate("/contact-us");
      setNavlink("Contact Us");
    }else if(page==='Clients'){
      navigate("/clients");
      setNavlink("Clients");
    } else {
      navigate(
        `/products/categories/${page.split(" ").join("-").toLowerCase()}`
      );
      setNavlink(page);
    }
    toggleDrawer(false)();
    setMenu("");
    window.scrollTo(0, 0);
  };
  const handleService=(service)=>{
    navigate(`/services/service-details/${service.split(" ").join("-").toLowerCase()}`)
    toggleDrawer(false)();
    setMenu("");
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 2,
          position: "relative",
          padding: "0 20px 0 28px",
        }}
      >
        {pages.map((page) =>
          page == "Products" || page == "Services" ? (
            <Button
              key={page}
              id={page}
              onMouseEnter={() => {
                setMenu(page);
                setHovered(page);
              }}
              onMouseLeave={() => {
                setMenu("");
                setHovered("");
              }}
              sx={{
                visibility: pages.length < 5 && "hidden",
                color:'#364253',
                fontSize: "14px",
                fontWeight:'bold',
                textTransform: 'uppercase',
                "&:hover": {bgcolor: "rgba(156, 221, 0, 0.67)" },
              }}
            >
              {page}
              {page == menu ? (
                <KeyboardArrowUpIcon sx={{ fontSize: "20px" }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
              )}
            </Button>
          ) : (
            <Button
              key={page}
              onClick={() => {
                handleNavClick(page);
                handleMenu(page);
              }}
              sx={{
                textTransform: "uppercase",
                color: navlink === page ? "#fff" : "#364253",
                backgroundColor:
                  navlink === page ? "rgba(0, 130, 207, 1)" : "transparent",
                borderRadius: "4px",
                "&:hover": { bgcolor: "rgba(156, 221, 0, 0.65)" },
                fontSize: "14px",
                fontWeight:'bold'
              }}
            >
              {page}
            </Button>
          )
        )}
        <Box
          id="products-menu"
          sx={{
            width: "680px",
            display: menu == "Products" ? "flex" : "none",
            position: "absolute",
            top: 35,
            right: 10,
            bgcolor: "#f5f5f5",
            flexWrap: menu == "Products" ? "wrap" : "nowrap",
          }}
          onMouseEnter={() => {
            setMenu("Products");
          }}
          onMouseLeave={() => {
            setMenu("");
          }}
        >
          {productCategories.map((type) => (
            <Button
              key={type}
              sx={{
                width: "330px",
                borderBottom: "1px solid #d6d6d6",
                color: "#364253",
                bgcolor: navlink==type?'#99dc06':'#fff',
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "flex-start",
                margin: "4px",
                "&:hover": { bgcolor: "#364253", color: "#fff" },
              }}
              onClick={() => handleMenu(type)}
            >
              <KeyboardArrowRightIcon key={type + "icon"} />
              {type}
            </Button>
          ))}
        </Box>
        <Box
          id="services-menu"
          sx={{
            display: menu == "Services" ? "block" : "none",
            position: "absolute",
            top: 35,
            right: 10,
            bgcolor: "#f5f5f5",
          }}
          onMouseEnter={() => {
            setMenu("Services");
          }}
          onMouseLeave={() => {
            setMenu("");
          }}
        >
          {services.map((type) => (
            <Button
              key={type}
              sx={{
                width: "330px",
                borderBottom: "1px solid #d6d6d6",
                color: "#364253",
                bgcolor: navlink==type?'#99dc06':'#fff',
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "flex-start",
                margin: "4px",
                "&:hover": { bgcolor: "#364253", color: "#fff" },
              }}
              onClick={() => handleService(type)}
            >
              <KeyboardArrowRightIcon key={type + "icon"} />
              {type}
            </Button>
          ))}
        </Box>
      </Box>
      <Drawer
        anchor="top"
        open={openD}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: "80px", // Adjusting to open from bottom of header
            height: "auto",
            borderTop: "4px solid #0082cf",
          },
        }}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ background: "#ffffff", padding: "20px" }}
        >
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ borderBottom: "4px solid #364253" }}>
            {pages.map((page, i) => (
              <Box key={page} sx={{ width: "100%" }}>
                <ListItem
                  button
                  key={'list'+i}
                  onClick={() => {
                    if (page == "Products" || page == "Services") {
                      setMenu(page !== menu ? page : "");
                    } else {
                      handleMenu(page);
                    }
                  }}
                  sx={{
                    color:
                      navlink === page &&
                      (page !== "Products" || page !== "Services")
                        ? "#fff"
                        : "#364253",
                    backgroundColor:
                      navlink === page &&
                      (page !== "Products" || page !== "Services")
                        ? "rgba(0, 130, 207, 1)"
                        : "transparent",
                    borderRadius: "4px",
                    marginBottom: "2px",
                  }}
                >
                  <ListItemText key={page + "name"} primary={page} />
                  {page == "Products" || page == "Services" ? (
                    menu == page ? (
                      <KeyboardArrowUpIcon key={page + "iconup"} />
                    ) : (
                      <KeyboardArrowDownIcon key={page + "icondown"} />
                    )
                  ) : (
                    null
                  )}
                </ListItem>
                {page == "Products" && (
                  <Collapse key={page+'coll'} in={page == menu} timeout="auto" unmountOnExit>
                    <List key={page+'list'} component="div" disablePadding>
                      {productCategories.map((product) => (
                        <ListItem
                          button
                          key={product}
                          onClick={() => handleMenu(product)}
                          sx={{
                            pl: 4,
                            color: navlink === product ? "#fff" : "#364253",
                            backgroundColor:
                              navlink === product
                                ? "rgba(0, 130, 207, 1)"
                                : "transparent",
                            borderRadius: "4px",
                            marginBottom: "2px",
                            "&:hover": {
                              backgroundColor: "rgba(0, 131, 207, 1)",
                            },
                          }}
                        ><KeyboardArrowRightIcon key={product + "icon"} />
                          <ListItemText
                            key={product + "name"}
                            primary={product}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
                {page == "Services" && (
                  <Collapse key={page+'coll'} in={page == menu} timeout="auto" unmountOnExit>
                    <List key={page+'list'} component="div" disablePadding>
                      {services.map((service) => (
                        <ListItem
                          button
                          key={service}
                          onClick={() => handleService(service)}
                          sx={{
                            pl: 4,
                            color: navlink === service ? "#fff" : "#364253",
                            backgroundColor:
                              navlink === service
                                ? "rgba(0, 130, 207, 1)"
                                : "transparent",
                            borderRadius: "4px",
                            marginBottom: "2px",
                            "&:hover": {
                              backgroundColor: "rgba(0, 131, 207, 1)",
                            },
                          }}
                        ><KeyboardArrowRightIcon key={service + "icon"} />
                          <ListItemText
                            key={service + "name"}
                            primary={service}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <MailOutlineIcon />
            </IconButton>
            <IconButton>
              <CallIcon />
            </IconButton>
          </Box>
        </motion.div>
      </Drawer>
    </>
  );
}

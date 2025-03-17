import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { globalContext } from "../App";
import { Circle } from "@mui/icons-material";
import { useParams } from "react-router";
import Banner from "./Banner";

const Services = () => {
  const { setNavlink } = useContext(globalContext);
  const { type } = useParams();
  let serviceType = type
    .split("-")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");

  useEffect(() => {
    setNavlink(serviceType);
    window.scrollTo({top:0,behavior:'smooth'})
  });

  return (
    <>
      <Banner name={serviceType} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", md: "60px 120px" },
          gap: 3,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src="/service-image.jpg"
            sx={{ height: "300px", width: "100%" }}
          />
        </Box>
        {true ? (
          <Box sx={{ width: "100%" }}>
            <Box>
              <Typography variant="h5">Nitrogen Gas Plants:</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Circle sx={{ color: "#000", fontSize: "10px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="PSA nitrogen plants produce pure nitrogen gas, essential for
              various industries. Cost-effective, reliable, and eco-friendly
              solution for nitrogen needs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle sx={{ color: "#000", fontSize: "10px" }} />
                  </ListItemIcon>
                  <ListItemText primary="We Design & Supply of Nitrogen gas plants as per your specifications required i.e is upto 1000Nm3/Hr with 99-99.99% Purity." />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography variant="h5">Oxygen Gas Plants:</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Circle sx={{ color: "#000", fontSize: "10px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="PSA oxygen plants deliver high-purity oxygen. 
              Vital for medical, industrial applications. 
              Efficient, on-site production ensures steady supply, reducing logistics challenges."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle sx={{ color: "#000", fontSize: "10px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="We Design & Supply of Nitrogen gas plants as per your specifications required 
              i.e is upto 500Nm3/Hr with 97% Purity."
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Services;

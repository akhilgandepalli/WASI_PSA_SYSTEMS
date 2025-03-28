import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { globalContext } from "../App";
import Banner from "./Banner";

const Clients = () => {
  const { setNavlink, clientImages} = useContext(globalContext);
  // const clientImages = [
  //   "/clients/client1.png",
  //   "/clients/client2.png",
  //   "/clients/client3.png",
  //   "/clients/client4.jpeg",
  //   "/clients/client5.jpeg",
  //   "/clients/client6.png",
  //   "/clients/client7.jpeg",
  //   "/clients/client8.jpeg",
  //   "/clients/client9.png",
  //   "/clients/client10.png",
  //   "/clients/client11.png",
  //   "/clients/client12.jpeg",
  //   "/clients/client13.png",
  //   "/clients/client14.png",
  //   "/clients/client15.jpeg",
  //   "/clients/client16.png",
  //   "/clients/client17.jpeg",
  //   "/clients/client18.png",
  //   "/clients/client19.png",
  //   "/clients/client20.png",
  //   "/clients/client21.jpeg",
  //   "/clients/client22.png",
  //   "/clients/client23.jpeg",
  //   "/clients/client24.jpeg",
  //   "/clients/client25.png",
  //   "/clients/client26.jpeg",
  //   "/clients/client27.png",
  //   "/clients/client28.jpeg",
  //   "/clients/client29.jpeg",
  //   "/clients/client30.jpeg",
  //   "/clients/client31.png",
  //   "/clients/client32.png",
  //   "/clients/client33.png",
  //   "/clients/client34.png",
  //   "/clients/client35.jpeg",
  //   "/clients/client36.jpeg",
  //   "/clients/client37.jpeg",
  //   "/clients/client38.png",
  //   "/clients/client39.png",
  // ];

  useEffect(() => {
    setNavlink("Clients");
  },[]);

  return (
    <>
      <Banner name={"Clients"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          flexWrap: "wrap",
          padding: { xs: "60px 20px", md: "60px 125px" },
          rowGap: 2,
          gap: 2,
        }}
      >
        {clientImages.map((image) => (
          <Card
            elevation={5}
            sx={{
              minHeight: { xs: 100, md: 120 },
              width: { xs: 150, md: 230 },
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              transition: "0.3s",
              backgroundColor: "#fff",
              color: "#000",
              padding: 2,
            }}
          >
            <CardMedia
              component={"img"}
              image={image}
              title={image}
              sx={{
                height: { xs: 120, md: 100 },
                transition: "0.3s",
                objectFit: "contain",
              }}
            />
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Clients;

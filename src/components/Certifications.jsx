import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { globalContext } from "../App";
import Banner from "./Banner";

const Certifications = () => {
  const { setNavlink } = useContext(globalContext);

  useEffect(() => {
    setNavlink("Certifications");
  });

  return (
    <>
      <Banner name={'Certifications'} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "80px 20px 20px 20px", md: "10px 120px 60px 120px" },
          gap: 3,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#364253",
            padding: { xs: "24px 0 32px 0", md: "40px 0 54px 0" },
            fontSize: { xs: "32px", md: "42px" },
          }}
        >
          Certifications
        </Typography>
      </Box>
    </>
  );
};

export default Certifications;

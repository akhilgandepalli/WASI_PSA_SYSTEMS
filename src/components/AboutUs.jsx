import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { globalContext } from "../App";
import Banner from "./Banner";

const AboutUs = () => {
  const { setNavlink } = useContext(globalContext);

  useEffect(() => {
    setNavlink("About Us");
  });

  return (
    <>
      <Banner name={'About Us'} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "80px 20px 20px 20px", md: "80px 120px" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
            height: { md: "600px" },
            width: "100%",
            //padding: { xs: "24px 0 32px 0", md: "64px 0" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: 400, md: "100%" },
              position: "relative",
              display: "flex",
              justifyContent: "end",
              mb: { xs: 2 },
            }}
          >
            <Box
              component={"img"}
              src="/wasipsaplant.jpg"
              sx={{
                position: "absolute",
                width: "92%",
                height: { xs: 400, md: "100%" },
                bottom: { xs: 10, md: 30 },
                right: { xs: 20, md: 30 },
                mb: { xs: 3, md: 0 },
                zIndex: 1,
              }}
            />
            <Box sx={{ width: "90%", height: "100%", bgcolor: "#0082cf" }} />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              ml: { md: 1 },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#0082cf",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                  marginLeft: "20px",
                }}
              />
              ABOUT US
              <div
                style={{
                  backgroundColor: "#5e8930",
                  width: "40px",
                  height: "1px",
                }}
              />
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#253041",
                mb: 2,
                fontSize: { xs: "32px", md: "54px" },
                fontWeight: 900,
                fontFamily: "rubik,sans-serif;",
              }}
            >
              WE HAVE BEST SOLUTION WITH US
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                gap: 2,
                color: "#364253",
              }}
            >
              WASI PSA Systems, established in 2014, is a leading manufacturer
              of nitrogen gas plants utilizing Pressure Swing Adsorption (PSA)
              technology. Specializing in on-site nitrogen generation, we offer
              innovative and reliable solutions to various industries. With a
              decade of experience, we've earned a reputation for delivering
              high-quality systems that meet industrial nitrogen needs
              efficiently and sustainably.
              <br />
              <br />
              WASI PSA Systems also PSA Oxygen Gas Plants, Compressed Air Drying
              Units and Fabrication of Pressure Vessels etc.. We provide
              advanced solutions for on-site Oxygen and Compressed Air
              generation, catering to diverse industrial requirements.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#364253",
        height: {xs:'auto',md:"50vh"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection:{xs:'column',md:'row'},
          justifyContent: "space-evenly",
          alignItems: {md:"center"},
          padding: 2,
          gap: 4,
          height: "85%",
        }}
      >
        <Box sx={{ height: "70%" }}>
          <Typography
            sx={{ color: "#fff", padding: "16px 0", fontSize: "18px" }}
          >
            Payment Options
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: {md:"space-between"},
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component={"img"}
              src="/zpstock-image-943.png"
              sx={{ height: "30px" }}
            />
            <Box
              component={"img"}
              src="/zpstock-image-942.png"
              sx={{ height: "30px" }}
            />
            <Box
              component={"img"}
              src="/zpstock-image-941.png"
              sx={{ height: "30px" }}
            />
          </Box>
          <Typography sx={{ color: "#fff", paddingTop: 3, fontSize: "14px" }}>
            © gadgets zone
          </Typography>
          <Typography
            sx={{ color: "#fff", padding: "4px 0", fontSize: "16px" }}
          >
            Powered by zoho commerce
          </Typography>
        </Box>
        <Box sx={{ height: "70%" }}>
          <Typography
            sx={{ color: "#fff", padding: "16px 0", fontSize: "18px" }}
          >
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: {md:"space-between"},
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              component={"img"}
              src="/zpstock-image-534.png"
              sx={{ height: "20px" }}
            />
            <Box
              component={"img"}
              src="/zpstock-image-536.png"
              sx={{ height: "20px" }}
            />
            <Box
              component={"img"}
              src="/zpstock-image-537.png"
              sx={{ height: "20px" }}
            />
          </Box>
        </Box>
        <Box sx={{ height: "70%" }}>
          <Typography
            sx={{ color: "#fff", padding: "16px 0", fontSize: "18px" }}
          >
            We Accept
          </Typography>
          <ul
            style={{ color: "#fff", paddingLeft: 20, fontFamily: "sans-serif" }}
          >
            <li style={{ padding: 8 }}>Visa Cards</li>
            <li style={{ padding: 8 }}>Master Cards </li>
            <li style={{ padding: 8 }}>Other Cards</li>
          </ul>
        </Box>
        <Box sx={{ height: "70%" }}>
          <Typography
            sx={{ color: "#fff", padding: "16px 0", fontSize: "18px" }}
          >
            News Letter
          </Typography>
          <Box
            component={"form"}
            sx={{ display: "flex", flexDirection: "column", width: "280px" }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                  "& input": {
                    color: "#fff", // Change the text color here
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // Change the label text color here
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff", // Change the focused label text color here
                },
              }}
            />
            <Button sx={{bgcolor:'#fff',color:'#0082cf',m:'8px 0',textTransform:'capitalize'}}>Subscribe</Button>
          </Box>
        </Box>
      </Box>
      <Box
        component={"a"}
        href="#"
        sx={{
          width: "100%",
          bgcolor: "#000",
          height: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Typography sx={{ color: "#fff", pr: 2, fontSize: "15px" }}>
          Powered By
        </Typography>
        <Box
          component={"img"}
          src="/commerce-logo-white.svg"
          sx={{ height: "30px" }}
        />
      </Box>
    </Box>
  );
};

export default Footer;

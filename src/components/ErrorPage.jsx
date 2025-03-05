import React, { useContext, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

const ErrorPage = () => {
   const { setNavlink } = useContext(globalContext);
   const navigate = useNavigate()
  
    useEffect(() => {
      setNavlink("Contact");
    });

  return (
    <Box
      sx={{
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: {xs:'80px 0',md: "40px 120px" },
        gap: 0,
      }}
    >
      <Box component={'img'} src="/error-404.jpg" sx={{width:{xs:'100%',md:'600px'}}} />
      <Button variant='outlined' sx={{textTransform:'capitalize',color:'#0082cf'}} onClick={()=>navigate('/')} >Go to Home Page</Button>
    </Box>
  );
};

export default ErrorPage;

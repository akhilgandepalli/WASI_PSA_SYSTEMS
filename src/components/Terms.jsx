import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { globalContext } from "../App";

const Terms = () => {
  const { setNavlink } = useContext(globalContext);

  useEffect(() => {
    setNavlink("Terms and Conditions");
  });

  return (
    <Box
      sx={{
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "80px 20px 20px 20px", md: "0px 120px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#364253", padding: "16px 0", textAlign: "center" }}
      >
        The face of the moon was in shadow
      </Typography>
      <Typography
        sx={{ color: "#6c798b", textAlign: "center", fontSize: "14px" }}
      >
        Almost before we knew it, we had left the ground. All their equipment
        and instruments are alive.Mist enveloped the ship three hours out from
        port. The spectacle before us was indeed sublime.A red flair silhouetted
        the jagged edge of a wing.
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#0082cf",
          marginTop: 3,

          textTransform: "capitalize",
        }}
      >
        Get Started Now
      </Button>
    </Box>
  );
};

export default Terms;

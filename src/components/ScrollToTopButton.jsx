import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleScrollToTop}
          title="Scroll Top"
          sx={{
            height: { xs: "35px", md: "40px" },
            minWidth: "40px!important",
            padding: "4px !important",
            position: "fixed",
            bottom: { xs: 45, md: 25 },
            right: { xs: 10, md: 25 },
            zIndex: 1000,
            bgcolor: "rgba(0, 130, 207, 0.8)",
            color: "#fff",
            borderRadius: 10,
            "&:hover": {
              bgcolor: "#5e8930",
              color: "#fff",
            },
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: { xs: "24px", md: "32px" } }} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;

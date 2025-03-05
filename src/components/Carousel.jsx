import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowForwardIos, Circle, CircleOutlined } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const images = [
  "Nitrogen Gas Plant.JPG",
  "Compressed Air Filters.jpg",
  "zpstock-image-935.jpg",
  "zpstock-image-936.jpg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("right");
  
    const handlePrev = () => {
      setSlideDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setSlideDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };  
  
    // Auto-slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(handleNext, 10000);
      return () => clearInterval(interval);
    }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        marginTop: {xs:"100px",md:'0px'},
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Image Slider Container */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(${slideDirection === "right" ? -currentIndex * 100 : currentIndex === 0 ? -100 * (images.length - 1) : -currentIndex * 100}%)`,
          transition: "transform 1.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </Box>

      {/* Previous Button */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",

          color: "white",
          "&:hover": { backgroundColor: {md:"rgba(0,0,0,0.4)"} },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",

          color: "white",
          "&:hover": { backgroundColor: {md:"rgba(0,0,0,0.4)"} },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Indicators (Dots) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
        }}
      >
        {images.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{ color: "gray", padding: "5px" }}
          >
            {index === currentIndex ? (
              <Circle sx={{ fontSize: "12px" }} />
            ) : (
              <CircleOutlined sx={{ fontSize: "12px" }} />
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
